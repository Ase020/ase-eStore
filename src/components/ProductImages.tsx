"use client";

import Image from "next/image";
import React from "react";

function ProductImages({ images }: { images: any }) {
  const [index, setIndex] = React.useState<number>(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image: any, i: number) => (
          <figure
            className="w-1/4 h-32 relative gap-4 mt-6 cursor-pointer"
            key={image._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.image?.url}
              alt={image.title}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
