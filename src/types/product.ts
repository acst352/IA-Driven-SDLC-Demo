export type Product = {
  id: string;
  title: string;
  price: number;
  discount_percent: number;
  image_url: string;
  free_shipping: boolean;
  created_at: string;
};

const priceFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}

export function discountedPrice(product: Product): number {
  return product.price * (1 - product.discount_percent / 100);
}
