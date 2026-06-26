import { test, expect } from "@playwright/test";

test.describe("Navbar", () => {
  test("muestra el logo, la barra de búsqueda y los accesos", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: /mercado libre/i })).toBeVisible();
    await expect(page.getByPlaceholder("Buscar productos, marcas y más...")).toBeVisible();
    await expect(page.getByRole("link", { name: "Creá tu cuenta" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Ingresá" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Mis compras" })).toBeVisible();
  });

  test("muestra ubicación de entrega ficticia", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/Enviar a: Ciudad de México/)).toBeVisible();
  });

  test("muestra menús de navegación (Historial, Ofertas, Soporte)", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Historial" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Ofertas" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Soporte" })).toBeVisible();
  });

  test("muestra el dropdown de categorías al hover", async ({ page }) => {
    await page.goto("/");
    const categoriesBtn = page.getByRole("button", { name: /categorías/i });
    await categoriesBtn.hover();
    await expect(page.getByRole("link", { name: "Vehículos" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Tecnología" })).toBeVisible();
  });
});
