import { goscord } from "#/lib/configs/goscord";
import { test, expect } from "@playwright/test";

test.describe("footer left link icons", () => {
  test("github icon", async({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");

    const github = footer.locator("#github-link-icon");
    const githubAttributes = {
      href: await github.getAttribute("href"),
      target: await github.getAttribute("target")
    };

    await expect(github).toBeVisible();
    expect(githubAttributes.href).toBe(goscord.github.mainRepoUrl);
    expect(githubAttributes.target).toBe("_blank");

    await github.click();
  });

  test("discord icon", async({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");

    const discord = footer.locator("#discord-link-icon");
    const discordAttributes = {
      href: await discord.getAttribute("href"),
      target: await discord.getAttribute("target")
    };

    await expect(discord).toBeVisible();
    expect(discordAttributes.href).toBe(goscord.discord.url);
    expect(discordAttributes.target).toBe("_blank");

    await discord.click();
  });
});