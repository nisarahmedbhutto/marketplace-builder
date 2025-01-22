"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import vector from "../../../../../public/images/about/Vector (6).png";

function Header2() {

  
  return (
    <div
      className="flex justify-center items-center mt-[-170px] flex-col h-[600px] 
    md:flex-row bg-gray-100 md:mt-0 md:bg-none  md:h-[64px] gap-[70px]"
    >
      <div>
        <h3 className="font-bold text-[24px] leading-tight hidden md:block text-[#252B42]">
          Bandage
        </h3>
      </div>
      <div className="flex justify-center items-center md:flex-row">
        <ol className="flex items-center justify-center  flex-col gap-[15px] md:flex-row">
          <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
            <Link href="/about/">Home</Link>
          </li>
          <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
            <Link href="/about/product">Product</Link>
          </li>
          <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
            <Link href="/about/pricing">Pricing</Link>
          </li>
          <li className="text-[34px] md:text-[14px] font-semibold text-[#7C7A7A]">
            <Link href="/about/contect">Contact</Link>
          </li>
        </ol>
      </div>
      <div className="hidden md:block items-center justify-center gap-[30px]">
        <div className="flex mt-4  justify-center items-center gap-10">
          <h2 className="text-[#23A6F0] text-[16px]">Login</h2>
          <h3 className="flex justify-center items-center text-[13px] bg-[#23A6F0] w-[150px] h-[40px] text-white rounded-[10px]">
            Become a member
          </h3>
        </div>
        <Image src={vector} alt="" width={20} height={20} />
      </div>
    </div>
  );
}

export default Header2;
