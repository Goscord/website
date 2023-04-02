import { navbarPages } from "#/lib/configs/navbar";
import { test, expect, devices } from "@playwright/test";

test("navbar elements", async({ page }) => {
  await page.goto("/");

  // Open burger menu (if is mobile device):
  if (page.viewportSize()?.width === devices["iPhone XR"].viewport.width) {
    await page.click("#burger");
  }

  // Check if navbar page button are visible and have the right link:
  const navbar = page.getByRole("navigation");

  for (const item of navbarPages) {
    const link = navbar.getByRole("link", { name: item.label });

    const href = await link.getAttribute("href");
    const target = await link.getAttribute("target");

    expect(link).toBeVisible();

    expect(href).toBe(item.href);
    expect(target).toBe(item.external ? "_blank" : "_self");
  }
});