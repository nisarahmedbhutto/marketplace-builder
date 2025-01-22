import React from "react";
import { productCard } from "./productCardData";
import Image from "next/image";
import Link from "next/link";

function ProductCard() {
  return (
    <div className="flex flex-wrap justify-center flex-col items-center gap-20 my-10 sm:flex-row md:flex-row md:gap-6 sm:gap-6">
      {productCard.map((product, index) => (
        <Link
          href={{
            pathname: `/${index}`, 
          }}
          key={index}
        >
          <div className="flex flex-col items-center gap-2.5 py-10 cursor-pointer">
            <Image
              src={product.image}
              alt={product.title}
              quality={100}
              width={300}
              height={300}
              className="w-[300px] h-[500px] sm:w-[295px] md:w-[310px] lg:w-[300px]"
            />
            <h5 className="text-lg font-medium">{product.title}</h5>
            <p className="text-sm text-gray-500">{product.category}</p>
            <div className="flex gap-4">
              <span className="text-gray-400 line-through">
                {product.prices}
              </span>
              <span className="text-green-600">{product.newPrices}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
