import React from "react";
import ProductCard from "../components/product/product";
import Image from "next/image";
import unplush2 from "../../../../public/images/common/unplush (2).png";
import InnerTeam from "../components/product/innerTeamData";
import TrialData from "../components/common/trialData";

function Product() {
  return (
    <div className="flex flex-col justify-center items-center my-24">
      <div
        className="flex flex-col justify-center items-center gap-8"
        id="head"
      >
        <h3>WHAT WE DO</h3>
        <h2 className="text-4xl text-center font-extrabold">
          Innovation tailored for you
        </h2>
      </div>

      {/* unplush section */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <Image
          src={unplush2}
          alt="Unplush Section Image"
          width={1100}
          height={1100}
          quality={100}
          className="w-[400px] h-[536px]"
        />

        <ProductCard />
      </div>

      {/* Team Section */}
      <div
        className="flex flex-col justify-center items-center mt-24 mb-12"
        id="teamMeet"
      >
        <h2 className="text-3xl">Meet Our Team</h2>
        <div>
          <InnerTeam />
        </div>
      </div>

      <div>
        <TrialData />
      </div>
    </div>
  );
}

export default Product;
