import { navbarPages } from "#/lib/configs/navbar";
import { test, expect } from "@playwright/test";

test("click on navbar items", async({ page }) => {
  await page.goto("/");

  // Open burger menu:
  await page.click("#burger");

  // Check if all navbar pages are visible:
  for (const item of navbarPages) {
    expect(page.getByText(item.label)).toBeVisible();
  }
});