import { Filter, ProductList } from "@/components";
import Image from "next/image";
import React from "react";

function Products() {
  return (
    <main className="container-padding">
      <div className="bg-pink-50 px-4 hidden sm:flex justify-between h-64">
        <div className="w-2/3 flex pl-32 py-4 flex-col gap-8">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>

          <button
            type="button"
            className="rounded-3xl bg-red-primary text-white w-max py-3 px-5 text-sm"
          >
            Buy Now
          </button>
        </div>

        <div className="relative w-1/3">
          <Image src="/woman.png" alt="woman" fill className="object-contain" />
        </div>
      </div>

      <Filter />

      <h1 className="capitalize mt-6 md:mt-8 lg:mt-12 text-xl font-semibold">
        Shoes For You!
      </h1>
      <ProductList />
    </main>
  );
}

export default Products;
