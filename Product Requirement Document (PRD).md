# Product Requirement Document (PRD)

# Proyecto: Clon de Portada de Mercado Libre (Mini-Demo Experimental)

**Contexto del Experimento:** Este documento sirve como la "Especificación Madre" bajo la metodología *Spec-Driven Development*. Cualquier cambio en el alcance debe modificarse aquí antes de alterar el código fuente.

## 1. Visión del Proyecto y Objetivos

- **Objetivo Principal:** Crear y desplegar una landing page funcional que clone la interfaz y experiencia de la página principal de Mercado Libre, demostrando un incremento de productividad del equipo mediante el uso de IA generativa y automatizaciones.
- **Dominio de Lanzamiento:** `ia-devs.mx`
- **Métricas de Éxito del Experimento:**
    - Tiempo total de desarrollo reducido en al menos un 50% comparado con el desarrollo tradicional.
    - Cobertura de pruebas automatizadas iniciales (Playwright) al 100% en flujos críticos.
    - Presupuesto de infraestructura y herramientas optimizado.

## 2. Stack Tecnológico Estrecho

| **Capa** | **Tecnología Seleccionada** | **Justificación** |
| --- | --- | --- |
| **Frontend Framework** | Next.js (App Router) + React.js | Estándar de la industria para e-commerce por su rendimiento y SEO (SSR/ISR). |
| **Estilos / UI** | Tailwind CSS + Flowbite | Aceleración del diseño mediante utilidades y componentes preconstruidos compatibles con Figma. |
| **Base de Datos y Storage** | Supabase (PostgreSQL + Bucket) | Backend-as-a-Service rápido para almacenar datos de productos y hospedar imágenes en la nube. |
| **Hosting y Despliegue** | Vercel | Integración nativa con Next.js y generación automática de *Preview URLs*. |

## 3. Requerimientos Funcionales (Alcance de la Landing Page)

### 3.1. Barra de Navegación Superior (Navbar)

- Logo clonado de Mercado Libre (redirecciona a la misma página).
- Barra de búsqueda funcional (búsqueda local/estática simulada sobre los productos cargados).
- Ubicación de entrega ficticia.
- Menú de categorías (estático), Historial, Ofertas, Soporte.
- Accesos simulados a "Creá tu cuenta", "Ingresá" y "Mis compras".

### 3.2. Banner Principal (Hero Carousel)

- Carrusel de imágenes con navegación lateral (flechas) e indicadores de posición.
- Las imágenes promocionales deben cargarse desde un bucket de Supabase.

### 3.3. Grilla de Productos (Sección Principal)

- Desplegar una sección de **"Ofertas populares"** o **"Inspirado en tus búsquedas"**.
- Cada tarjeta de producto (Card) debe incluir:
    - Imagen del producto (URL de Supabase Storage).
    - Precio original y precio con descuento (cálculo dinámico).
    - Envío gratis (etiqueta verde condicional).
    - Calificación con estrellas (estático).
    - Título corto del producto.

### 4. Requerimientos No Funcionales y Criterios de Aceptación (Para QA)

- **Rendimiento:** Puntuación de Mobile/Desktop en Lighthouse superior a 85 (gracias a la optimización de imágenes de Next.js).
- **Responsividad:** Diseño *Mobile-First*. La página debe verse idéntica en iPhone 14/15, tablets y monitores de escritorio (1920x1080).
- **Monitoreo de Errores:** Sentry debe estar inicializado tanto en el cliente como en el servidor para capturar fallos en tiempo real tras el despliegue.

### 5. Estructura de Datos (Supabase Schema)

Para que tu IA (en Cursor o OpenCode) cree la base de datos sin alucinar, este es el esquema de la tabla `products`:

create table products (
id uuid default gen_random_uuid() primary key,
title text not null,
price numeric not null,
discount_percent numeric default 0,
image_url text not null,
free_shipping boolean default false,
created_at timestamp with time zone default timezone('utc'::text, now()) not null
);