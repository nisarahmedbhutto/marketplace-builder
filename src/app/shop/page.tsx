import ShopCard from "../components/shop/shopCard";
import Cloths from "../components/shop/cloths";
import Brand from "../components/common/brand";
import Link from "next/link";
import Header from "../components/headr/header";

function Shop() {
  return (
    <div className="grid">
      {/* header section */}
      <div><Header /></div>

      {/* shop head section */}
      <div className="flex flex-col justify-center md:gap-[400px] py-5 sm:flex-row sm:gap-[300px]">
        <div className="flex justify-center items-center pb-5">
          <h2 className="text-5xl font-semibold">Shop</h2>
        </div>
        <div className="flex justify-center gap-12 mt-2 ">
          <h3 className="text-3xl font-medium">Home</h3>
          <h3 className="text-3xl font-medium">Shop</h3>
        </div>
      </div>

      {/* cloth section */}
      <div>
        <Cloths />
      </div>

      {/* filter section */}
      <div className="mt-20 flex flex-col justify-center gap-14 md:gap-20 lg:gap-40  items-center md:flex-row ">
        <div>
          <h2 className="text-xl text-gray-400 md:text-lg">
            Showing all 12 results
          </h2>
        </div>
        <div className="flex justify-center items-center gap-2  ">
          <div>
            <h3 className="text-2xl pr-2 text-gray-400 md:text-lg">Views:</h3>
          </div>
          <div className="grid grid-cols-2 gap-[2px] border rounded border-gray-200 p-[12px]">
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <div className="grid grid-rows-3 gap-[5px] border rounded border-gray-200 p-[10px]">
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className="w-8 h-1 bg-gray-300"></div>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center ">
          <div>
            <h2 className=" flex justify-center items-center text-xl border border-gray-400 md:text-lg rounded w-[130px] h-[50px] ">
              Popularity
            </h2>
          </div>
          <div>
            <h3 className="text-xl flex justify-center items-center text-white bg-sky-400  md:text-lg rounded w-[80px] h-[50px] ">
              Filter
            </h3>
          </div>
        </div>
      </div>


      {/* products section */}
      <div>
        <ShopCard />
      </div>

      {/* brands section */}
      <div className="">
        <Brand />
      </div>

      {/* next page section */}
      <div className="flex justify-center gap-32 mt-8">
        <Link href="/shop" className="text-2xl text-blue-500">
          first
        </Link>
        <Link href="/shop/product" className="text-2xl text-blue-500">
          Next
        </Link>
      </div>
    </div>
  );
}

export default Shop;
