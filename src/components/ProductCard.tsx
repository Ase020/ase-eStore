import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

function ProductCard({ product }: { product: products.Product }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <Link className="relative w-full h-80" href={`/products/${product.slug}`}>
        <Image
          src={product.media?.mainMedia?.image?.url || "/product.png"}
          alt={product.media?.mainMedia?.title!}
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
        />
        {product.media?.items && (
          <Image
            src={product.media?.items[1]?.image?.url!}
            alt={product.media?.mainMedia?.title!}
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        )}
      </Link>

      <div className="flex justify-between mt-1">
        <Link
          href={`/products/${product.slug}`}
          className="font-medium line-clamp-1"
        >
          {product.name}
        </Link>
        <span className="font-semibold text-nowrap">
          {product.price?.currency} {product.price?.discountedPrice}
        </span>
      </div>

      {product.description && (
        <p
          className="text-sm text-gray-500 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description),
          }}
        />
      )}

      <button
        type="button"
        className="rounded-2xl ring-1 ring-red-primary text-red-primary py-2 px-4 text-xs hover:bg-red-primary hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
