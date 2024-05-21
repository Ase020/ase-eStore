import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="mt-8 grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;
