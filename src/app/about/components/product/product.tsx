import productData from "./productData";
import Image from "next/image";
import React from "react";

function ProductCard() {
  return (
    <div className="grid grid-cols-2 justify-center gap-4  w-[300px] items-center">
      {productData.map(({ image }, index) => (
        <div key={index} >
          <Image
            src={image}
            alt=""
            width={1200}
            height={1200}
            className="w-[300px] h-[255px] mt-2  sm:w-full"
          />
        </div>
      ))}
    </div>
  ); 
}

export default ProductCard;
