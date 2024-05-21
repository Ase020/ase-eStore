"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const search = form.get("search") as string;

    if (search) return router.push(`/products?search=${search}`);
  };

  return (
    <form
      className="flex-between flex-1 gap-4 bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
