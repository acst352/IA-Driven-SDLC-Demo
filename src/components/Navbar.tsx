"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";

type NavbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

const categories = [
  "Vehículos",
  "Inmuebles",
  "Servicios",
  "Tecnología",
  "Hogar y Muebles",
  "Electrodomésticos",
  "Herramientas",
  "Deportes y Fitness",
];

export function Navbar({ query, onQueryChange }: NavbarProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onQueryChange(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <header className="sticky top-0 z-30 w-full bg-[#ffe600] shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-2 py-2 sm:gap-4 sm:px-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-[#2d3277] sm:text-3xl"
          aria-label="Mercado Libre clone - Inicio"
        >
          Mercado Libre
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 items-center"
          role="search"
        >
          <div className="relative flex w-full items-center">
            <input
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Buscar productos, marcas y más..."
              aria-label="Buscar productos, marcas y más..."
              className="w-full rounded-sm border-0 bg-white py-2 pl-3 pr-11 text-sm text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#3483fa]/40"
            />
            <button
              type="submit"
              aria-label="Buscar"
              className="absolute right-0 flex h-9 w-10 items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.3-4.3m1.7-4.2a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Access links (simulados) */}
        <nav className="hidden shrink-0 items-center gap-3 text-xs text-gray-700 sm:flex">
          <a href="#" className="hover:text-[#3483fa]">
            Creá tu cuenta
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-[#3483fa]">
            Ingresá
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:text-[#3483fa]">
            Mis compras
          </a>
        </nav>
      </div>

      {/* Secondary bar: ubicación + menús */}
      <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-2 pb-2 text-xs text-gray-700 sm:px-4">
        {/* Ubicación de entrega ficticia */}
        <div className="flex shrink-0 items-center gap-1">
          <svg
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span>Enviar a: Ciudad de México 00000</span>
        </div>

        {/* Menú de categorías (dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setCategoriesOpen(true)}
          onMouseLeave={() => setCategoriesOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-1 text-gray-700 hover:text-[#3483fa]"
            aria-expanded={categoriesOpen}
            aria-haspopup="true"
          >
            Categorías
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {categoriesOpen && (
            <ul className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="block px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-[#3483fa]"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Links de navegación */}
        <nav className="hidden items-center gap-4 text-gray-700 md:flex">
          <a href="#" className="hover:text-[#3483fa]">
            Historial
          </a>
          <a href="#" className="hover:text-[#3483fa]">
            Ofertas
          </a>
          <a href="#" className="hover:text-[#3483fa]">
            Soporte
          </a>
        </nav>
      </div>
    </header>
  );
}
