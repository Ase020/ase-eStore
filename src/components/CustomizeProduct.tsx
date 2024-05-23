"use client";

import { products } from "@wix/stores";
import React from "react";
import AddToCart from "./AddToCart";

type CustomizeProductProps = {
  productId: string;
  productOptions: products.ProductOption[];
  variants: products.Variant[];
};

function CustomizeProduct({
  productId,
  productOptions,
  variants,
}: CustomizeProductProps) {
  const [selectedOptions, setselectedOptions] = React.useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] =
    React.useState<products.Variant>();

  React.useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;

      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionsSelect = (optionType: string, choice: string) => {
    setselectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock.quantity &&
        variant.stock.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description as string,
              });

              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionsSelect(option.name!, choice.description!);

              return option.name === "Color" ? (
                <li
                  className="size-8 rounded-full ring-1 ring-gray-300 relative"
                  role="button"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute size-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-0.5 rounded-full bg-red-500 top-1/2 left-1/2 transform rotate-45 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <button
                  type="button"
                  className="ring-1 ring-red-primary text-red-primary rounded-md py-1 px-4 text-sm disabled:cursor-not-allowed"
                  disabled={disabled}
                  style={{
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </button>
              );
            })}
          </ul>
        </div>
      ))}

      <AddToCart
        productId={productId}
        stockNumber={selectedVariant?.stock?.quantity || 0}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
      />
    </div>
  );
}

export default CustomizeProduct;
