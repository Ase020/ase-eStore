"use client";

import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19565726/pexels-photo-19565726/free-photo-of-model-in-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/21370900/pexels-photo-21370900/free-photo-of-a-woman-holding-up-two-pink-cowboy-boots.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/22619499/pexels-photo-22619499/free-photo-of-converse-shoes-of-person-sitting-on-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/23709323/pexels-photo-23709323/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/23506703/pexels-photo-23506703/free-photo-of-woman-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function ProductImages() {
  const [index, setIndex] = React.useState<number>(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4">
        {images.map(({ id, url }, i) => (
          <figure
            className="w-1/4 h-32 relative gap-4 mt-6 cursor-pointer"
            key={id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={url}
              alt=""
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
