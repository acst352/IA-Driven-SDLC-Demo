"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/types/product";

export function Storefront({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <main className="mx-auto w-full max-w-6xl px-2 py-4 sm:px-4">
        <ProductGrid products={products} query={query} />
      </main>
    </>
  );
}
