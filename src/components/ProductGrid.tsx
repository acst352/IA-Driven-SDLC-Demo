"use client";

import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
  query: string;
};

export function ProductGrid({ products, query }: ProductGridProps) {
  const trimmed = query.trim().toLowerCase();
  const filtered = trimmed
    ? products.filter((p) => p.title.toLowerCase().includes(trimmed))
    : products;

  if (filtered.length === 0) {
    return (
      <section className="py-16 text-center">
        <p className="text-lg font-medium text-gray-600">
          No encontramos resultados para tu búsqueda
        </p>
      </section>
    );
  }

  return (
    <section aria-label="Ofertas populares">
      <h2 className="mb-3 text-base font-semibold text-gray-800 sm:text-lg">
        Ofertas populares
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
