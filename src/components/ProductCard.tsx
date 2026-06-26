import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice, discountedPrice } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.discount_percent > 0;
  const finalPrice = discountedPrice(product);

  return (
    <article className="flex flex-col gap-2 rounded-md bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden rounded bg-gray-50">
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-2"
        />
      </div>

      {hasDiscount && (
        <p className="text-xs font-medium text-green-600">
          {product.discount_percent}% OFF
        </p>
      )}

      <div className="flex flex-col">
        {hasDiscount && (
          <span className="text-xs text-gray-400 line-through">
            {formatPrice(product.price)}
          </span>
        )}
        <span className="text-lg font-semibold text-gray-900">
          {formatPrice(finalPrice)}
        </span>
      </div>

      {product.free_shipping && (
        <p className="text-xs font-semibold text-green-600">Envío gratis</p>
      )}

      <div className="flex items-center gap-0.5 text-[#face3b]" aria-label="Calificación 5 de 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 0 0 .95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 0 0-.36 1.12l1.36 4.18c.3.92-.75 1.69-1.54 1.12l-3.56-2.59a1 1 0 0 0-1.18 0l-3.56 2.59c-.79.57-1.84-.2-1.54-1.12l1.36-4.18a1 1 0 0 0-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 0 0 .95-.69L9.05 2.93Z" />
          </svg>
        ))}
      </div>

      <h3 className="line-clamp-2 text-sm text-gray-700">{product.title}</h3>
    </article>
  );
}
