import { AddToCart, CustomizeProduct, ProductImages } from "@/components";
import { wixClientServer } from "@/lib/useWixClient";
import { notFound } from "next/navigation";
import React from "react";

async function Product({ params }: { params: { slug: string } }) {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!items[0]) notFound();
  const product = items[0];

  console.log("Product: ", items[0]);

  return (
    <main className="container-padding flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-16">
      {/* Image */}
      <section className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.media?.items} />
      </section>

      {/* Description */}
      <section className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>

        <p className="text-gray-500">{product.description}</p>

        <div className="h-0.5 bg-gray-100" />

        {product.price?.price === product.price?.discountedPrice ? (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.price?.formatted?.price}
            </h3>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.price?.formatted?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              {product.price?.formatted?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-0.5 bg-gray-100" />

        <CustomizeProduct />
        <AddToCart />
        <div className="h-0.5 bg-gray-100" />

        {product.additionalInfoSections?.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p className="">{section.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Product;
