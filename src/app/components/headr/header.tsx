"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import downArow from "../../../../public/images/home/downArow.png";
import user from "../../../../public/images/home/user.png";
import search from "../../../../public/images/home/search.png";
import favorite from "../../../../public/images/home/favorite.png";
import cart from "../../../../public/images/home/cart.png";
import phone from "../../../../public/images/home/phone.png";
import email from "../../../../public/images/home/email.png";
import instagram from "../../../../public/images/home/instagram.png";
import youtube from "../../../../public/images/home/youtube.png";
import facebook from "../../../../public/images/home/facebook.png";
import twitter from "../../../../public/images/home/twitter.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="hidden xl:block">
        <div className="flex justify-center items-center  h-14 gap-36 bg-gray-800 text-white text-sm px-5">
          <div className="flex gap-5 items-center">
            <Image src={phone} alt="" />
            <span>(225) 555-0118</span>
            <Image src={email} alt="" />
            <span>michelle.revera@example.com</span>
          </div>
          <h4 className="font-medium text-sm">
            Follow Us and get a chance to win 80% off
          </h4>
          <div className="flex gap-5 items-center">
            <span>Follow Us:</span>
            <Image src={instagram} alt="" />
            <Image src={youtube} alt="" />
            <Image src={facebook} alt="" />
            <Image src={twitter} alt="" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex justify-center gap-20 lg:gap-44 sm:gap-56 lg:justify-between items-center h-14 bg-white px-5">
        <h3 className="text-2xl font-bold text-gray-800">Bandage</h3>
        <div className="flex justify-center items-center md:flex-row">
          <ol className=" hidden lg:flex items-center justify-center  flex-col gap-[35px] md:flex-row">
            <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
              <Link href="/contect[...slug]">Contact</Link>
            </li>
            <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
              <Link href="/pages">Pages</Link>
            </li>
          </ol>
        </div>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden flex flex-col justify-center items-center w-8 h-5 gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className={`w-full h-[3px] bg-gray-800 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div
            className={`w-full h-[3px] bg-gray-800 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`w-full h-[3px] bg-gray-800 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex gap-5">
          <div className="flex items-center gap-2">
            <Image src={user} alt="user" />
            <span className="text-sm"><Link href="/login">Login</Link></span>
          </div>
          <Image src={search} alt="search" />
          <Image src={cart} alt="cart" />
          <Image src={favorite} alt="favorite" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-white shadow-md absolute top-14 left-0 w-full z-50">
          {["Home", "Shop", "About", "Blog", "Contact", "Pages"].map(
            (page, index) => (
              <li
                key={index}
                className="py-2 text-gray-800 hover:text-blue-500 w-full text-center"
              >
                <Link href={`/${page.toLowerCase()}`} onClick={toggleMenu}>
                  {page}
                </Link>
              </li>
            )
          )}
          <li>
            <Image src={downArow} alt="arrow" />
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
