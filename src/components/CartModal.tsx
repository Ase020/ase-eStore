"use client";

import Image from "next/image";
import React from "react";

function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-xl bg-white right-0 top-12 flex flex-col gap-6 z-20">
      <h4 className="font-semibold text-2xl text-nowrap">Shopping Cart</h4>
      {!cartItems ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <>
          <div className="flex flex-col gap-8 max-h-96 overflow-y-auto scrollbar-hide">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="">
            <div className="flex-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">Ksh 1,500</span>
            </div>

            <p className="text-gray-500 text-sm my-4">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="text-sm flex-between">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;

const CartItem = () => {
  return (
    <div className="flex gap-4 mr-3">
      <Image
        src="https://images.pexels.com/photos/22855935/pexels-photo-22855935/free-photo-of-a-blonde-woman-in-a-green-sweater-smiling.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={72}
        height={96}
        className="object-cover rounded-md"
      />

      <div className="flex flex-col justify-between w-full">
        <div className="">
          <div className="flex-between gap-8">
            <h3 className="font-semibold">Product Name</h3>
            <span className="p-1 bg-gray-50 rounded-sm">Ksh 500</span>
          </div>

          <small className="text-sm text-gray-500">available</small>
        </div>

        <div className="flex-between text-sm">
          <span className="text-gray-500">Qty. 2</span>
          <button type="button" className="text-blue-500">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
