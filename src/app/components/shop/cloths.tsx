import React from "react";
import Image from "next/image";
import cloth1 from "../../../../public/images/shop/product-list/col-md-4.png";
import cloth2 from "../../../../public/images/shop/product-list/card-item.png";
import cloth3 from "../../../../public/images/shop/product-list/card-item (1).png";
import cloth4 from "../../../../public/images/shop/product-list/card-item (2).png";
import cloth5 from "../../../../public/images/shop/product-list/card-item (3).png";


function Cloths() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 py-20 flex-wrap w-full
    sm:flex-row sm:flex-wrap sm:gap-5 px-5
    ">
      
        <Image src={cloth1} alt="" width={100}
            height={100} quality={100} className="w-full h-full py-2  flex sm:w-[200px]"/> 
      
      
        <Image src={cloth2} alt="" width={100}
            height={100} quality={100} className="w-full h-full py-2  flex sm:w-[200px]"/> 
      
      
        <Image src={cloth3} alt="" width={100}
            height={100} quality={100} className="w-full h-full py-2  flex sm:w-[200px]"/> 
      
      
        <Image src={cloth4} alt="" width={100}
            height={100} quality={100} className="w-full h-full py-2  flex sm:w-[200px]"/> 
      
      
        <Image src={cloth5} alt="" width={100}
            height={100} quality={100} className="w-full h-full py-2  flex sm:w-[200px]"/> 
      
    </div>
  );
}

export default Cloths;
