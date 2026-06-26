import { createClient } from "@/lib/supabase/server";
import { Storefront } from "@/components/Storefront";
import type { Product } from "@/types/product";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  const products = (error ? [] : (data ?? [])) as Product[];

  return <Storefront products={products} />;
}
