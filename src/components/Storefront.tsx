"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/types/product";

function TestSentryButton() {
  return (
    <button
      onClick={() => {
        throw new Error("Sentry test error — verificación de monitoreo en producción");
      }}
      className="fixed bottom-4 right-4 z-50 rounded bg-red-600 px-4 py-2 text-sm text-white shadow-lg hover:bg-red-700"
    >
      Test Sentry Error
    </button>
  );
}

export function Storefront({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <main className="mx-auto w-full max-w-6xl px-2 py-4 sm:px-4">
        <HeroCarousel />
        <div className="mt-4">
          <ProductGrid products={products} query={query} />
        </div>
      </main>
      <TestSentryButton />
    </>
  );
}
