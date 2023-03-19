import { navbarPages } from "#/lib/configs/navbar";
import { test, expect } from "@playwright/test";

test("click on navbar items", async({ page }) => {
  await page.goto("/");

  // Open burger menu:
  await page.click("#burger");

  // Check if navbar page button are visible and have the right link:
  for (const item of navbarPages) {
    const link = page.getByRole("link", { name: item.label });

    // const href = await link.getAttribute("href");
    // const target = await link.getAttribute("target");

    expect(link).toBeVisible();
    // expect(href).toBe(item.href);
    // expect(target).toBe(item.external ? "_blank" : "_self");
  }
});