import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard() {
  return (
    <div className="w-full flex flex-col gap-2">
      <Link className="relative w-full h-80" href={`/products/1`}>
        <Image
          src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
        />
        <Image
          src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </Link>

      <div className="flex justify-between mt-1">
        <Link href={`/products/1`} className="font-medium">
          Product Name
        </Link>
        <span className="font-semibold">Ksh 850</span>
      </div>

      <p className="text-sm text-gray-500 line-clamp-2">
        river needs please hall or slipped southern fall born whose determine
        clean anything ago bigger branch house coat brain control although black
        eleven lost
      </p>

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
