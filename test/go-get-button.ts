import { goscord } from "#/lib/configs/goscord";
import { test, expect } from "@playwright/test";

test("copy \"go get\" command to clipboard from button", async({ page }, { project }) => {
  await page.goto("/");

  const header = page.locator("header");
  const button = header.getByRole("button", { name: goscord.github.install });

  await button.click({ force: true });

  if (project.name !== "chromium") return;

  const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());

  expect(clipboardContent).toContain(goscord.github.install);
});