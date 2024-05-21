import { ProductImages } from "@/components";
import React from "react";

function Product() {
  return (
    <main className="container-padding border-red flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-16">
      {/* Image */}
      <section className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </section>

      {/* Description */}
      <section className="w-full lg:w-1/2 flex flex-col gap-6 border-red">
        <h1 className="text-4xl font-medium">Product Name</h1>

        <p className="text-gray-500">
          stand forest successful become occur silk shut toward face mail break
          swept far inside produce event needed exist busy effort cut mix flies
          instance
        </p>

        <div className="h-0.5 bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">Ksh 1,200</h3>
          <h2 className="font-medium text-2xl">Ksh 999</h2>
        </div>

        <div className="h-0.5 bg-gray-100" />
      </section>
    </main>
  );
}

export default Product;
