import { footerLinks } from "#/lib/configs/footer";
import { test, expect } from "@playwright/test";

test("footer right sections", async({ page }) => {
  await page.goto("/");

  const footer = page.locator("footer");

  for (const section of footerLinks) {
    const title = footer.getByRole("heading", { name: section.title });

    expect(title).toBeVisible();

    for (const item of section.links) {
      const link = footer.getByRole("link", { name: item.name });

      expect(link).toBeVisible();

      const href = await link.getAttribute("href");
      const target = await link.getAttribute("target");

      expect(href).toBe(item.link);
      expect(target).toBe("_blank");
    }
  }
});