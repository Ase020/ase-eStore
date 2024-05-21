import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll mt-8 scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

export default CategoryList;

const CategoryCard = () => {
  const cat = "clothes";
  return (
    <Link
      href={`/products?category=${cat}`}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 group"
    >
      <div className="relative bg-slate-100 w-full h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/23940965/pexels-photo-23940965/free-photo-of-a-man-and-woman-are-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          sizes="20vw"
          className="object-cover transition-all ease-in-out duration-300 transform group-hover:scale-105"
        />
      </div>

      <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
    </Link>
  );
};
