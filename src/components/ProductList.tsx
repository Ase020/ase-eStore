import React from "react";
import ProductCard from "./ProductCard";
import { wixClientServer } from "@/lib/useWixClient";
import { products } from "@wix/stores";

interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

async function ProductList({
  categoryId,
  limit = 20,
  searchParams,
}: ProductListProps) {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .limit(limit)
    .eq("collectionIds", categoryId)
    .find();

  return (
    <div className="mt-8 grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((product: products.Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {/* <ProductCard />
      <ProductCard />
      <ProductCard /> */}
    </div>
  );
}

export default ProductList;
