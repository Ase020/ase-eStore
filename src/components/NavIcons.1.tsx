"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export function NavIcons() {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const router = useRouter();

  const loggedIn = false;

  const handleProfile = () => {
    if (!loggedIn) {
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        role="button"
        onClick={handleProfile}
      />
      {profileOpen && (
        <div className="">
          <Link href="/">Profile</Link>
          <span className="mt-2 cursor-pointer">Logout</span>
        </div>
      )}

      <Image
        src="/notification.png"
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer"
      />
    </div>
  );
}
