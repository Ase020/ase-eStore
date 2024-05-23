import React from "react";
import ProductCard from "./ProductCard";
import { wixClientServer } from "@/lib/useWixClient";
import { products } from "@wix/stores";
import Pagination from "./Pagination";

interface ProductListProps {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}

async function ProductList({
  categoryId,
  limit = 8,
  searchParams,
}: ProductListProps) {
  const wixClient = await wixClientServer();
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 10_000_000)
    .limit(limit)
    .skip(searchParams?.page ? parseInt(searchParams.page) * limit : 0);

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }

    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const products = await productQuery.find();

  return (
    <>
      <div className="mt-8 grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.items.map((product: products.Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={products.currentPage || 0}
        hasNext={products.hasNext()}
        hasPrev={products.hasPrev()}
      />
    </>
  );
}

export default ProductList;
