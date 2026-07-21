import Link from "next/link";

type Requirement = {
  label: string;
  detail: string;
};

const requirements: Requirement[] = [
  {
    label: "Ubicación de entrega ficticia",
    detail: "Indicador 'Enviar a: Ciudad de México 00000' en la barra secundaria.",
  },
  {
    label: "Menú de categorías (estático)",
    detail: "Dropdown 'Categorías' con listado fijo de rubros.",
  },
  {
    label: "Menús: Historial, Ofertas, Soporte",
    detail: "Enlaces de navegación en la barra secundaria.",
  },
  {
    label: "Accesos simulados",
    detail: "'Creá tu cuenta', 'Ingresá' y 'Mis compras' (sin lógica real).",
  },
];

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

export default function BocetoIcy13() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* Encabezado del boceto */}
        <header className="mb-6">
          <span className="inline-flex items-center rounded-full bg-[#2d3277] px-3 py-1 text-xs font-semibold text-white">
            ICY-13
          </span>
          <h1 className="mt-3 text-2xl font-bold text-gray-900 text-balance">
            Boceto: Implementar menús y accesos (Navbar)
          </h1>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-600 text-pretty">
            Mockup estático de la barra de navegación superior del clon de Mercado Libre. Los enlaces
            son solo demostrativos y no tienen navegación real.
          </p>
        </header>

        {/* Mockup del Navbar */}
        <section aria-label="Mockup del navbar" className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <div className="w-full bg-[#ffe600]">
            {/* Barra principal */}
            <div className="flex items-center gap-4 px-4 py-3">
              <span className="shrink-0 text-2xl font-extrabold tracking-tight text-[#2d3277]">
                Mercado Libre
              </span>

              <div className="relative flex flex-1 items-center">
                <div className="flex w-full items-center rounded-sm bg-white py-2 pl-3 pr-11 text-sm text-gray-400 shadow-sm">
                  Buscar productos, marcas y más...
                </div>
                <svg
                  className="absolute right-3 h-5 w-5 text-gray-400"
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
              </div>

              {/* Accesos simulados */}
              <nav className="hidden shrink-0 items-center gap-3 text-xs text-gray-700 sm:flex">
                <span className="hover:text-[#3483fa]">Creá tu cuenta</span>
                <span className="text-gray-400">|</span>
                <span className="hover:text-[#3483fa]">Ingresá</span>
                <span className="text-gray-400">|</span>
                <span className="hover:text-[#3483fa]">Mis compras</span>
              </nav>
            </div>

            {/* Barra secundaria: ubicación + menús */}
            <div className="flex items-center gap-4 px-4 pb-3 text-xs text-gray-700">
              <div className="flex shrink-0 items-center gap-1">
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>Enviar a: Ciudad de México 00000</span>
              </div>

              <span className="flex items-center gap-1 font-medium">
                Categorías
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>

              <span className="hover:text-[#3483fa]">Historial</span>
              <span className="hover:text-[#3483fa]">Ofertas</span>
              <span className="hover:text-[#3483fa]">Soporte</span>
            </div>
          </div>

          {/* Dropdown de categorías (mostrado abierto en el boceto) */}
          <div className="border-t border-gray-200 bg-white p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              Menú de categorías (estático) — vista abierta
            </p>
            <ul className="grid grid-cols-2 gap-1 sm:grid-cols-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="block rounded px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 hover:text-[#3483fa]">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Checklist de requisitos del issue */}
        <section aria-label="Requisitos del issue" className="mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-sm font-semibold text-gray-900">Requisitos cubiertos</h2>
          <ul className="flex flex-col gap-3">
            {requirements.map((req) => (
              <li key={req.label} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2d3277] text-white"
                  aria-hidden="true"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{req.label}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{req.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6">
          <Link href="/" className="text-sm font-medium text-[#3483fa] hover:underline">
            Ver el navbar en la app real
          </Link>
        </div>
      </div>
    </main>
  );
}
