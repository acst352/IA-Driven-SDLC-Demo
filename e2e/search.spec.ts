import { test, expect } from "@playwright/test";

test.describe("Barra de búsqueda", () => {
  test("filtra productos al escribir (case-insensitive)", async ({ page }) => {
    await page.goto("/");
    const search = page.getByPlaceholder("Buscar productos, marcas y más...");

    await search.fill("iphone");
    const grid = page.getByLabel("Ofertas populares");
    const cards = grid.locator("article");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    for (const card of await cards.all()) {
      const title = await card.locator("h3").textContent();
      expect(title?.toLowerCase()).toContain("iphone");
    }
  });

  test("muestra empty state cuando no hay resultados", async ({ page }) => {
    await page.goto("/");
    const search = page.getByPlaceholder("Buscar productos, marcas y más...");

    await search.fill("zzzzzzzzzz-no-existe");
    await expect(page.getByText("No encontramos resultados para tu búsqueda")).toBeVisible();
  });

  test("limpia el filtro al borrar el texto", async ({ page }) => {
    await page.goto("/");
    const search = page.getByPlaceholder("Buscar productos, marcas y más...");

    await search.fill("iphone");
    const grid = page.getByLabel("Ofertas populares");
    const filteredCount = await grid.locator("article").count();

    await search.fill("");
    const fullCount = await grid.locator("article").count();

    expect(fullCount).toBeGreaterThan(filteredCount);
  });
});
