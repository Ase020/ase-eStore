import { wixClientServer } from "@/lib/useWixClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function CategoryList() {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="px-4 overflow-x-scroll mt-8 scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((category) => (
          <Link
            key={category._id}
            href={`/products?category=${category.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group"
          >
            <div className="relative bg-slate-100 w-full h-96 overflow-hidden rounded-md">
              <Image
                src={category.media?.mainMedia?.image?.url || "/cat.png"}
                alt={category.media?.mainMedia?.title!}
                fill
                sizes="20vw"
                className="object-cover transition-all ease-in-out duration-300 transform group-hover:scale-105"
              />
            </div>

            <h1 className="mt-8 font-light text-xl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
