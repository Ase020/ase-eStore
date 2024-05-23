"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
}

function Pagination({ currentPage, hasNext, hasPrev }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(pageNumber));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex-between w-full mt-12">
      <button
        type="button"
        disabled={!hasPrev}
        className="rounded-md bg-red-primary text-white p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        onClick={() => createPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={!hasNext}
        className="rounded-md bg-red-primary text-white p-2 text-sm w-24 disabled:cursor-not-allowed disabled:bg-pink-200"
        onClick={() => createPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
