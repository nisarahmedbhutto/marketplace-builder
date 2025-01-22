import Image from "next/image";
import productData from "./productData";
import React from "react";

function ProductCard() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row  gap-10  mt-16">
      {productData.map(({ image, title, discreption, price }, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-6 pb-5 mb-5 border bg-white  border-gray-200 rounded-lg"
        >
          <div>
            <Image
              src={image}
              alt=""
              width={250}
              height={250}
              className="w-[250px] h-[350px]   rounded-t-md"
            />
          </div>
          <div className="flex flex-col items-start gap-2 pr-24">
            <h3 className="text-lg font-semibold">{title}</h3>
            <h4 className="text-sm text-gray-500">{discreption}</h4>
            <h3 className="text-xl font-bold">{price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
