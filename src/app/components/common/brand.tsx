import brandData from "./brandsData";
import Image from "next/image";
import React from "react";

function Brand() {
  return (
    <div
      className="flex flex-col justify-evenly items-center gap-20 mt-10 mb-12 
    sm:flex-row sm:flex-wrap sm:mx-10
    "
    >
      {brandData.map(({ image }, index) => (
        <div key={index} className="">
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            quality={100}
            className=""
          />
        </div>
      ))}
    </div>
  );
}

export default Brand;
