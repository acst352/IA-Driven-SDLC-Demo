import { test, expect } from "@playwright/test";

/**
 * Tests de práctica para explorar Playwright UI.
 * - test 1: time-travel (múltiples expect encadenados)
 * - test 2: selector playground (locators en el dropdown de categorías)
 * - test 3: caso fallido a propósito (para ver debugging)
 */

test.describe("Práctica Playwright UI", () => {
  test("TC1: time-travel — navegación paso a paso", async ({ page }) => {
    await page.goto("/");

    // Pausa 1: verificamos la página inicial
    await expect(page.getByPlaceholder("Buscar productos, marcas y más...")).toBeVisible();

    // Pausa 2: escribimos y verificamos filtrado en vivo
    const search = page.getByPlaceholder("Buscar productos, marcas y más...");
    await search.fill("iphone");
    await page.waitForTimeout(200); // pausa para que el filtro en cliente se aplique

    // Pausa 3: limpiamos y verificamos que vuelve a mostrar todos
    await search.fill("");
    await page.waitForTimeout(200);
    await expect(page.getByText("Ofertas populares")).toBeVisible();
  });

  test("TC2: hover en categorías — abre dropdown", async ({ page }) => {
    await page.goto("/");
    const categorias = page.getByRole("button", { name: /categorías/i });
    await categorias.hover();
    // Verificamos que aparecen categorías del dropdown
    await expect(page.getByText("Vehículos")).toBeVisible();
    await expect(page.getByText("Tecnología")).toBeVisible();
  });

  test("TC3: FALLO a propósito — para ver debugging UI", async ({ page }) => {
    test.fail();
    await page.goto("/");
    // Este test va a FALLAR. Click en el panel de UI para ver el snapshot
    // del momento exacto del fallo, el DOM, y la traza.
    await expect(page.getByText("Texto que no existe en la página")).toBeVisible({ timeout: 2000 });
  });
});
