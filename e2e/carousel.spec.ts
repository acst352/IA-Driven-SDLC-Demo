import { test, expect } from "@playwright/test";

test.describe("Hero Carousel", () => {
  test("muestra el carrusel con imágenes", async ({ page }) => {
    await page.goto("/");
    const carousel = page.getByLabel("Banner principal");
    await expect(carousel).toBeVisible();
    await expect(carousel.locator("img").first()).toBeVisible();
  });

  test("navega a la siguiente imagen con la flecha derecha", async ({ page }) => {
    await page.goto("/");
    const carousel = page.getByLabel("Banner principal");

    const firstImg = carousel.locator("img").first();
    await expect(firstImg).toBeVisible();

    const nextBtn = carousel.getByRole("button", { name: "Imagen siguiente" });
    await nextBtn.click();

    await expect(carousel.getByRole("button", { name: "Ir a imagen 2" })).toHaveClass(/bg-white$/);
  });

  test("navega a la imagen anterior con la flecha izquierda", async ({ page }) => {
    await page.goto("/");
    const carousel = page.getByLabel("Banner principal");

    const prevBtn = carousel.getByRole("button", { name: "Imagen anterior" });
    await prevBtn.click();

    await expect(carousel.getByRole("button", { name: "Ir a imagen 3" })).toBeVisible();
  });

  test("navega directamente con los indicadores", async ({ page }) => {
    await page.goto("/");
    const carousel = page.getByLabel("Banner principal");

    await carousel.getByRole("button", { name: "Ir a imagen 3" }).click();

    const thirdDot = carousel.getByRole("button", { name: "Ir a imagen 3" });
    await expect(thirdDot).toHaveClass(/bg-white$/);
  });
});
