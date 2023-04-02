import { goscord } from "#/lib/configs/goscord";
import { test, expect } from "@playwright/test";

test("footer left link icons", async({ page }) => {
  await page.goto("/");

  // Footer locator:
  const footer = page.locator("footer");

  // GitHub icon:
  const github = footer.locator("#github-link-icon");
  const githubAttributes = {
    href: await github.getAttribute("href"),
    target: await github.getAttribute("target")
  };

  expect(github).toBeVisible();
  expect(githubAttributes.href).toBe(goscord.github.mainRepoUrl);
  expect(githubAttributes.target).toBe("_blank");

  await github.click();

  // Discord icon:
  const discord = footer.locator("#discord-link-icon");
  const discordAttributes = {
    href: await discord.getAttribute("href"),
    target: await discord.getAttribute("target")
  };

  expect(discord).toBeVisible();
  expect(discordAttributes.href).toBe(goscord.discord.url);
  expect(discordAttributes.target).toBe("_blank");

  await discord.click();
});