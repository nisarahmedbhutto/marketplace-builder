import React from "react";
import Image from "next/image";
import technology from "../../../public/images/about/technology 1.png";
import Team from "../components/about/innerTeam";
import Brand from "../components/common/brand";
import unplush from "../../../public/images/about/unsplash_vjMgqUkS8q8.png";
import filter from "../../../public/images/about/filter.png";

function About() {
  return (
    <div className="grid justify-center items-center mt-24" id="aboutpage">

      {/* about section */}
      <div className="flex justify-center items-center gap-24 flex-col md:flex-row" id="about">
        <div className="flex flex-col gap-8 justify-center items-center " id="content">
          <h3>ABOUT COMPANY</h3>
          <h2 className="text-4xl">ABOUT US</h2>
          <h4 className="text-gray-600 text-center">
            We know how large objects will act, but things on a small scale
          </h4>
          <div className="flex justify-center items-center">
            <h5 className="bg-blue-600 text-white py-2 px-4 rounded-md">
              Get Quote Now
            </h5>
          </div>
        </div>
        <div className="bg-pink-100 rounded-full p-4 w-[300px] h-[300px]" id="image">
          <Image src={technology} alt="" width={350} height={350} />
        </div>
      </div>

      {/* Problem Section */}
      <div
        className="flex flex-col justify-center items-center  gap-12 py-24"
        id="problem"
      >
        <div>
          <h2 className="flex flex-col justify-center my-8 items-center text-red-500 text-sm">Problems trying</h2>
          <h3 className="text-center px-6 text-2xl">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div>
          <h4 className="text-center text-lg px-6 text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h4>
        </div>
      </div>

      {/* Trending Section */}
      <div
        className="flex flex-col justify-center items-center md:flex-row md:gap-10 gap-24 my-12 text-center"
        id="trendingContenor"
      >
        <div>
          <h1 className="text-4xl">15K</h1>
          <h3 className="text-xl text-gray-600">Happy Customers</h3>
        </div>
        <div>
          <h1 className="text-4xl">150K</h1>
          <h3 className="text-xl text-gray-600">Monthly Visitors</h3>
        </div>
        <div>
          <h1 className="text-4xl">15k</h1>
          <h3 className="text-xl text-gray-600">Countries Worldwide</h3>
        </div>
        <div>
          <h1 className="text-4xl">100+</h1>
          <h3 className="text-xl text-gray-600">Top Partners</h3>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full" id="video">
        <Image src={filter} alt="" className="w-full" />
      </div>

      {/* Team Section */}
      <div className="flex flex-col justify-center items-center gap-12 mt-16 py-8" id="team">
        <h2 className="text-5xl text-center leading-[60px]">Meet Our Team</h2>
        <h4 className="text-lg text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h4>
        <Team />
      </div>

      {/* Compare Section */}
      <div
        className="flex flex-col items-center gap-8 mb-12 mt-24"
        id="compare"
      >
        <h1 className="text-5xl text-center leading-[60px]">Big Companies Are Here</h1>
        <p className="text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Brand Section */}
      <div>
        <Brand />
      </div>

      {/* Banner Section */}
      <div
        className="grid md:grid-cols-2 justify-evenly items-center py-12"
        id="lastBanner"
      >
        <div
          className="flex flex-col justify-center  py-[120px] items-center gap-8 bg-blue-400 text-white p-8 md:rounded-none rounded-md"
          // id="bannerContent"
        >
          <h2 className="text-lg">WORK WITH US</h2>
          <h3 className="text-5xl text-center leading-[60px]">Now Let’s grow Yours</h3>
          <p className="text-md text-center">
            The gradual accumulation of information about atomic <br />
            and small-scale behavior during the first quarter of the 20th
          </p>
          <button className="px-4 py-2 bg-blue-500 border border-white w-[120px] rounded-md">
            Button
          </button>
        </div>
        <div className="hidden md:block w-full">
          <Image src={unplush} alt="" width={1200} height={1200} className="h-[622px] lg:h-[515px]"/>
        </div>
      </div>
    </div>
  );
}

export default About;
