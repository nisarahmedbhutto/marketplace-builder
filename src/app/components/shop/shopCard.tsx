import React from "react";
import { shopCard } from "./shopCardData";
import Image from "next/image";

function ShopCard() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-20 px-4">
      {shopCard.map(({ image, title, prices, category, newPrices }, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white  p-2 rounded-lg flex-wrap
                     w-full sm:w-[46%] md:w-[40%] lg:w-[30%] xl:w-[22%]"
        >
          <Image
            src={image}
            alt="image"
            width={300}
            height={300}
            quality={100}
            className="w-full h-[400px] sm:h-[400px] object-fill "
          />
          <h5 className="text-2xl font-medium mt-4">
            {title}
          </h5>
          <p className="text-lg  text-gray-500">
            {category}
          </p>
          <div className="flex gap-4 mt-2">
            <span className="text-gray-400 text-xl line-through">
              {prices}
            </span>
            <span className="text-green-600 text-xl ">
              {newPrices}
            </span>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="w-6 h-6  rounded-full bg-[#23A6F0]"></div>
            <div className="w-6 h-6  rounded-full bg-[#23856D]"></div>
            <div className="w-6 h-6  rounded-full bg-[#E77C40]"></div>
            <div className="w-6 h-6  rounded-full bg-[#252B42]"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCard;
