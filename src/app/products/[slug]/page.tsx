import { AddToCart, CustomizeProduct, ProductImages } from "@/components";
import { wixClientServer } from "@/lib/useWixClient";
import { notFound } from "next/navigation";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

async function Product({ params }: { params: { slug: string } }) {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!items[0]) notFound();
  const product = items[0];

  // console.log("Product: ", product);

  return (
    <main className="container-padding flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-16">
      {/* Image */}
      <section className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.media?.items} />
      </section>

      {/* Description */}
      <section className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>

        <div
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description as string),
          }}
        />

        <div className="h-0.5 bg-gray-100" />

        {product.price?.price === product.price?.discountedPrice ? (
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-2xl">
              {product.price?.formatted?.discountedPrice}
            </h2>
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

        {product.variants && product.productOptions ? (
          <CustomizeProduct
            productId={product._id as string}
            productOptions={product.productOptions}
            variants={product.variants}
          />
        ) : (
          <AddToCart
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-0.5 bg-gray-100" />

        {product.additionalInfoSections?.map((section) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section.description as string),
              }}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Product;
