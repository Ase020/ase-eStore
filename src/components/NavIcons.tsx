"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import CartModal from "./CartModal";

function NavIcons() {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const router = useRouter();

  const loggedIn = false;

  const handleProfile = () => {
    if (!loggedIn) {
      router.push("/login");
    }
    setProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={24}
        height={24}
        className="cursor-pointer"
        role="button"
        onClick={handleProfile}
      />
      {profileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm flex flex-col shadow-2xl z-20">
          <Link href="/">Profile</Link>
          <span className="mt-2 cursor-pointer">Logout</span>
        </div>
      )}

      <Image
        src="/notification.png"
        alt="notification"
        width={24}
        height={24}
        className="cursor-pointer"
      />

      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt="cart"
          width={24}
          height={24}
          role="button"
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <span className="absolute -top-4 -right-4 size-6 bg-red-primary flex-center rounded-full text-white text-sm">
          8
        </span>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
}

export default NavIcons;
