import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Menu, NavIcons, SearchBar } from ".";

function Navbar() {
  return (
    <div className="h-20 container-padding relative">
      {/* Mobile */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <h3 className="text-2xl tracking-wide font-bold">aseWear</h3>
        </Link>
        <Menu />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex-between h-full gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <h3 className="text-2xl tracking-wide font-bold">aseWear</h3>
          </Link>

          <nav className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/products">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>

        <div className="w-2/3 xl:w-1/2 flex-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
