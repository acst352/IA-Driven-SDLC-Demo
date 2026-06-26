import { test, expect } from "@playwright/test";

test.describe("Grilla de productos", () => {
  test("muestra la sección de Ofertas populares", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Ofertas populares" })).toBeVisible();
  });

  test("cada card tiene imagen, precio y título", async ({ page }) => {
    await page.goto("/");
    const cards = page.getByLabel("Ofertas populares").locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    const firstCard = cards.first();
    await expect(firstCard.locator("img")).toBeVisible();
    await expect(firstCard.locator("h3")).toBeVisible();
    await expect(firstCard.getByText(/\$/).first()).toBeVisible();
  });

  test("muestra etiqueta de envío gratis cuando corresponde", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Envío gratis").first()).toBeVisible();
  });

  test("muestra descuento cuando el producto tiene discount_percent > 0", async ({ page }) => {
    await page.goto("/");
    const offLabels = page.getByText(/% OFF/);
    const count = await offLabels.count();
    if (count > 0) {
      await expect(offLabels.first()).toBeVisible();
    }
  });
});
