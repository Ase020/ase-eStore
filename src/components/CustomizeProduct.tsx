import React from "react";

function CustomizeProduct() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute size-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>

        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500" />

        <li className="size-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-0.5 rounded-full bg-red-500 top-1/2 left-1/2 transform rotate-45 -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>

      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <button
          type="button"
          className="ring-1 ring-red-primary text-red-primary rounded-md py-1 px-4 text-sm"
        >
          Small
        </button>

        <button
          type="button"
          className="ring-1 ring-red-primary text-white bg-red-primary rounded-md py-1 px-4 text-sm"
        >
          Medium
        </button>

        <button
          type="button"
          disabled
          className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm disabled:cursor-not-allowed"
        >
          Large
        </button>
      </ul>
    </div>
  );
}

export default CustomizeProduct;
