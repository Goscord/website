import { goscord } from "#/lib/configs/goscord";
import { test, expect } from "@playwright/test";

test("copy \"go get\" command to clipboard from button", async({ page }) => {
  await page.goto("/");

  const header = page.locator("header");
  const button = header.getByRole("button", { name: goscord.github.install });

  await button.click({ position: { x: 5, y: 5 } }); // define position to bypass button animation

  await new Promise(resolve => setTimeout(resolve, 2000));

  const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());

  expect(clipboardContent).toContain(goscord.github.install);
});