import { footerLinks } from "#/lib/configs/footer";
import { test, expect } from "@playwright/test";

test.describe("footer right sections", () => {
  for (const section of footerLinks) test(`${section.title.toLowerCase()} section`, async({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");

    const title = footer.getByRole("heading", { name: section.title });

    await expect(title).toBeVisible();

    for (const item of section.links) {
      const link = footer.getByRole("link", { name: item.name });

      await expect(link).toBeVisible();

      const href = await link.getAttribute("href");
      const target = await link.getAttribute("target");

      expect(href).toBe(item.link);
      expect(target).toBe("_blank");

      await link.click();
    }
  });
});