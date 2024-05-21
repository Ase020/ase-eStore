"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu"
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <nav className="absolute left-0 top-20 w-full bg-black text-white h-[calc(100vh-80px)] flex-center flex-col gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(2)</Link>
        </nav>
      )}
    </div>
  );
}

export default Menu;
