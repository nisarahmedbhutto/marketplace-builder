import Image from "next/image";
import Link from "next/link";
import Header from "./components/headr/header";
import ProductCard from "./components/home/productCard";
import Feature from "./components/home/feature";
import shopHero from "../../public/images/home/shop-hero-1-product-slide-1.jpg"
import shopHero2 from "../../public/images/home/shop-hero-2-png-picture-1.png"
import filter from "../../public/images/home/filter.png"
import filter2 from "../../public/images/home/filter (2).png"
import filter3 from "../../public/images/home/filter (3).png"
import filter1 from "../../public/images/home/filter (1).png"
import asian from '../../public/images/home/asian-woman-man-with-winter-clothes 1.png'
import ProductsCards from "./products/page";


export default function Home() {
  return (
    <div className="grid justify-center items-center overflow-hidden">
      {/* <!-- Header Section --> */}
      <div>
        <Header />
      </div>

      {/* <!-- Hero Section --> */}
      <div className="relative grid">
        <div>
          <Image
            src={shopHero}
            alt="hero"
            width={1100}
            height={1100}
            quality={100}
            className="w-[100%] sm:w-[100%] md:w-[100%] h-[852px] object-cover"
          />
        </div>
        <div
          className="absolute top-64 left-1/2  transform -translate-x-1/2  flex flex-col items-center gap-14 text-white text-center
        sm:left-[350px]
        "
        >
          <h5 className="font-bold text-sm tracking-wide">SUMMER 2020</h5>
          <h1 className="font-bold text-5xl tracking-wider font-sans">
            NEW COLLECTION
          </h1>
          <h4 className="font-normal text-lg">
            We know how large objects <br /> will act, but things on a <br />{" "}
            small scale.
          </h4>
          <button className="bg-green-600 text-white py-4 px-10 rounded">
            <Link href="/shop/product">
              <h3 className="text-lg">SHOP NOW</h3>
            </Link>
          </button>
        </div>
      </div>

      {/* <!-- Shop Card Section --> */}
      <div className="flex flex-col items-center gap-12 w-full  px-8 py-20">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-lg font-medium text-gray-800">EDITOR’S PICK</h2>
          <p className="text-gray-500 flex text-center">
            Problems trying to resolve <br /> the conflict between
          </p>
        </div>
        <div
          className="flex gap-3 flex-col  justify-center items-center 
        sm:flex-row
        "
        >
          <div>
            <Image
              src={filter}
              alt="main"
              width={1100} 
              quality={100}
              height={1100} 
              className="w-[300px] h-[500px] object-cover sm:w-[200px] md:w-[400px]"
            />
          </div>
          <div>
            <Image
              src={filter1}
              alt="woman"
              width={1100} 
              quality={100}
              height={1100} 
              className="w-[300px] h-[500px] object-cover sm:w-[200px] md:w-[400px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Image
              src={filter2}
              alt="ACCESSORIES"
              width={1100}
              height={1100}
              quality={100}
              className="w-[300px] h-[242px] object-cover sm:w-[200px] md:w-[400px]"
            />
            <Image
              src={filter3}
              alt="KIDS"
              // width={1100}
              // height={1100}
              quality={100}
              className="w-[300px] h-[242px] object-cover sm:w-[200px] md:w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* <!-- Product Section --> */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-lg font-medium text-gray-600">
            Featured Products
          </h2>
          <h3 className="text-xl font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-gray-500 text-center">
            Problems trying to resolve the <br /> conflict between
          </p>
        </div>
        <ProductCard />
      </div>

      {/* <!-- Banner Section --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 gap-10 bg-teal-700 px-12 py-20">
        <div className="flex flex-col gap-10 items-center justify-center text-white">
          <h5 className="text-sm font-bold">SUMMER 2020</h5>
          <h1 className="text-3xl font-bold text-center">
            Vita classNameic <br /> Product
          </h1>
          <h4 className="text-lg font-normal text-center">
            We know how large objects <br /> will act, We know how are objects{" "}
            <br /> will act, We know
          </h4>
          <div className="flex flex-col items-center gap-5">
            <h5 className="text-2xl font-bold">$16.48</h5>
            <button className="bg-green-600 text-white py-2 px-6 rounded">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={shopHero2}
            alt="banner"
            quality={100}
            width={1100}
            height={1100}
            className="w-[300px] h-[685px] "
          />
        </div>
      </div>

      {/* <!-- Asian Persons Section --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 px-12 py-20">
        <div className="flex flex-col gap-8 items-center justify-center sm:pr-8 sm:order-2">
          <h2 className="text-lg text-gray-500">SUMMER 2020</h2>
          <h3 className="text-4xl font-bold text-center">
            Part of the Neural
            <br /> Universe
          </h3>
          <h4 className="text-lg text-gray-500 text-center">
            We know how large <br /> objects will act,
            <br /> but things on a small scale.
          </h4>
          <div className="flex flex-col gap-5">
            <button className="border-2 border-blue-400 text-blue-400 py-2 px-6 rounded hover:bg-blue-400 hover:text-white">
              BUY NOW
            </button>
            <button className="border-2 border-blue-400 text-blue-400 py-2 px-6 rounded hover:bg-blue-400 hover:text-white">
              READ MORE
            </button>
          </div>
        </div>
        <div>
          <Image
            src={asian}
            alt="woman"
            width={1100}
            height={1100}
            quality={100}
            className="w-full h-[500px]  px-48 sm:w-full sm:px-0 sm:order-1"
          />
        </div>
      </div>

      {/* <!-- Featured Posts Section --> */}
      <div className="grid justify-center items-center mt-20">
        <div className="flex flex-col items-center gap-5 mb-20">
          <h2 className="text-lg text-blue-400">Practice Advice</h2>
          <h3 className="text-4xl font-bold text-center px-60">
            Featured Products
          </h3>
          <p className="text-center text-[15px] px-32 text-gray-500 max-w-xl">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <Feature />
        <ProductsCards />
      </div>
    </div>
  );
}
