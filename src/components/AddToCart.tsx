"use client";

import React from "react";

function AddToCart() {
  const [quantity, setQuantity] = React.useState<number>(1);
  const stock: number = 7;

  const handleQuantity = (type: "increase" | "decrease") => {
    type === "decrease"
      ? setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
      : setQuantity((prev) => (prev < stock ? prev + 1 : stock));
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a quantity</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 flex-between rounded-3xl w-32">
            <button
              type="button"
              className="text-xl disabled:cursor-not-allowed"
              disabled={quantity === 0}
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            <p className="">{quantity}</p>
            <button
              type="button"
              className="text-xl disabled:cursor-not-allowed"
              disabled={quantity >= stock}
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>

          <p className="text-sm">
            Only <span className="text-orange-400">{stock} items </span>
            left! <br />
            {"Don't"} miss it.
          </p>
        </div>

        <button
          type="button"
          className="w-36 text-sm rounded-3xl ring-1 ring-red-primary text-red-primary py-2 px-4 hover:bg-red-primary hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
