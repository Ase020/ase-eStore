import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="container-padding bg-gray-100 text-sm py-16">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4 lg:gap-6">
          <Link href="/">
            <h3 className="text-2xl tracking-wide font-bold">aseWear</h3>
          </Link>

          <p className="">
            China Centre, Ngong Forest Rd, Box 13501-00100,Nairobi, Kenya
          </p>

          <span className="font-semibold">info@asewear.com</span>

          <span className="font-semibold">254 718 424 876</span>

          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-semibold text-lg">Company</h1>

            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-semibold text-lg">Shop</h1>

            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-semibold text-lg">Help</h1>

            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4 lg:gap-6">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>

          <p className="">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 outline-none w-3/4"
            />
            <button type="submit" className="w-1/4 bg-red-primary text-white">
              Join
            </button>
          </form>

          <span className="font-semibold">Secure payments</span>

          <div className="flex-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center md:items-start justify-between flex-col md:flex-row gap-8">
        <p className="">© {year} aseWear Collections</p>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <span className="text-gray-500">Language</span>
            <span className="font-medium">Kenya | English</span>
          </div>

          <div className="flex gap-4">
            <span className="text-gray-500">Currency</span>
            <span className="font-medium">Ksh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
