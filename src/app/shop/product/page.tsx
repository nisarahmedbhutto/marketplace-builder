import React from "react";
import Image from "next/image";
import single from "../../../../public/images/shop/product/single-product-1-cover-2.jpg";
import single2 from "../../../../public/images/shop/product/single-product-1-thumb-2.jpg";
import single3 from "../../../../public/images/shop/product/single-product-1-thumb-1.jpg";
import star1 from "../../../../public/images/shop/product/Vector (5).png";
import star2 from "../../../../public/images/shop/product/Vector (6).png";
import vecter7 from "../../../../public/images/shop/product/Vector (7).png";
import vecter8 from "../../../../public/images/shop/product/Vector (8).png";
import vecter9 from "../../../../public/images/shop/product/Vector (9).png";
import unplush from "../../../../public/images/shop/product/unsplash_QANOF9iJlFs.png";
import ProductCard from "../../components/shop/product";
import Brand from "../../components/common/brand";
import Header from "../../../app/components/headr/header";

function Product() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      {/* Header section */}
      <div><Header /></div>

      {/* Product item section */}
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-2 justify-center items-center gap-8 bg-gray-100  mx-auto mt-12 p-6">
        <div>
          <div className="flex justify-center items-center gap-10 mb-12">
            <h3>Home</h3>
            <h3>Shop</h3>
          </div>
          <div className="flex justify-center items-center w-[310px] sm:w-[300px] md:w-[330px] ">
            <Image
              src={single}
              alt=""
              width={1200}
              height={1200}
              quality={100}
              className="h-[300px]"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Image
              src={single2}
              alt=""
              width={1200}
              height={1200}
              quality={100}
              className="w-[100px]"
            />
            <Image
              src={single3}
              alt=""
              width={1200}
              height={1200}
              quality={100}
              className="w-[100px]"
            />
          </div>
        </div>

        <div className="flex flex-col pl-5 gap-2 sm:mt-10 sm:flex-row sm:flex-wrap md:flex-col">
          <h1 className="text-xl text-gray-300  font-bold">Floating Phone</h1>

          <div className="flex items-center gap-2">
            <Image src={star1} alt="Star" />
            <Image src={star1} alt="Star" />
            <Image src={star1} alt="Star" />
            <Image src={star1} alt="Star" />
            <Image src={star2} alt="Star" />
            <span className="text-gray-500 text-sm">10 Reviews</span>
          </div>

          <h2 className="text-2xl font-semibold">$1,139.33</h2>
          <h3 className="text-gray-600">
            Availability: <span className="text-teal-400">In Stock</span>
          </h3>
          <p className="text-gray-500">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr className="my-4" />
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <div className="w-6 h-6 rounded-full bg-orange-400"></div>
            <div className="w-6 h-6 rounded-full bg-gray-800"></div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-md cursor-pointer">
              Select Options
            </div>
            <div>
              <Image src={vecter7} alt="Option 1" />
            </div>
            <div>
              <Image src={vecter8} alt="Option 2" />
            </div>
            <div>
              <Image src={vecter9} alt="Option 3" />
            </div>
          </div>
        </div>
      </div>

      {/* Unplush section */}
      <div className="flex flex-col items-center gap-12 mt-16">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-sm">Description</p>
          <p className="text-sm">Additional Information</p>
          <p className="text-sm">Reviews (0)</p>
        </div>
        {/* <hr className="w-full h-1 bg-gray-300" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-4/5 mx-auto">
          <div>
            <Image src={unplush} alt="Unplush" width={1200} height={1200} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">The quick fox jumps over</h2>
            <p className="mt-4 text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <p className="mt-4 text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
            <p className="mt-4 text-gray-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">The quick fox jumps over</h2>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h2 className="text-xl font-semibold mt-8">
              The quick fox jumps over
            </h2>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
            <h4 className="text-gray-500">
              The quick fox jumps over the lazy dog
            </h4>
          </div>
        </div>
      </div>

      {/* Best Seller Products Section */}
      <div className="mt-16 pt-14 flex flex-col mx-auto px-5 items-center bg-gray-100  ">
        <h1 className="text-1xl font-bold">BESTSELLER PRODUCTS</h1>
        <div className=" mb-[-35px]" />
        <ProductCard />
        <Brand />
      </div>
    </div>
  );
}

export default Product;
