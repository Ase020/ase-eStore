"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Filter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="mt-4 md:mt-8 lg:mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        {/* Type */}
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#ebeded] outline-none"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        {/* Min Price */}
        <input
          type="number"
          min={0}
          max={10_000_000}
          name="min"
          placeholder="Min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        {/* Max Price */}
        <input
          type="number"
          name="max"
          min={0}
          max={10_000_000}
          placeholder="Max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />

        {/* Category */}
        <select
          name="category"
          className="py-2 px-4 rounded-2xl text-xs font-medium outline-none bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="new_arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>

        {/* All Filters */}
        <select
          name="allFilters"
          className="py-2 px-4 rounded-2xl outline-none text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>

      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl outline-none text-xs font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </section>
  );
}

export default Filter;
