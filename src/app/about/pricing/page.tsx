import React from "react";
import Link from "next/link";
import Image from "next/image";
import vector7 from "../../../../public/images/common/Vector (7).png";
import vector9 from "../../../../public/images/common/Vector (9).png";
import TrialData from "../../about/components/common/trialData";
import Brand from "@/app/components/common/brand";

function Pricing() {
  return (
    <div className="grid justify-center items-center" id="pricingPage">
      <div
        className="flex flex-col justify-center items-center mt-32 gap-5"
        id="pricing"
      >
        <h3 className="text-sm text-gray-600">PRICING</h3>
        <h2 className="text-4xl">Simple Pricing</h2>
        <div
          className="flex justify-center items-center gap-5 mt-5"
          id="vector"
        >
          <Link href={"/about/"}>Home</Link>
          <Image src={vector7} alt="" />
          <Link href={"/about/pricing"}>Pricing</Link>
        </div>
      </div>

      {/* Monthly Section Card */}
      <div
        className="flex flex-col justify-center items-center mt-12 gap-5"
        id="monthly"
      >
        <h2 className="text-3xl">Pricing</h2>
        <h3 className="text-center text-sm text-gray-500">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </h3>
        <div className="flex justify-center items-center gap-2 mt-12" id="icon">
          <h6 className="text-sm">Monthly</h6>
          <div
            className="border border-blue-500 w-20 h-8 rounded-full flex justify-center items-center"
            id="arow"
          >
            <h1 className="bg-gray-300 w-6 h-6 rounded-full"></h1>
          </div>
          <h6 className="text-sm">Yearly</h6>
          <h5 className="bg-cyan-400 text-white w-24 h-8 flex justify-center items-center rounded-lg">
            Save 25%
          </h5>
        </div>
      </div>

      {/* Pricing Save Card */}
      <div
        className="flex flex-col justify-center md:flex-row md:gap-0 items-center mt-24 mb-24 gap-32"
        id="pricingSave"
      >
        <div className="flex flex-col items-center gap-8 p-12 bg-white border border-blue-500 rounded-lg w-72 h-96">
          <h2>FREE</h2>
          <h4 className="text-center">
            Organize across all <br /> apps by hand
          </h4>
          <h3 className="text-blue-500">
            0 <sup>$</sup> Per Month
          </h3>
          <div
            className="flex justify-center items-center gap-5"
            id="innerSave"
          >
            <h6 className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
              <Image src={vector9} alt="" width={100} height={100} />
            </h6>
            <h5>Unlimited product updates</h5>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 p-12 bg-black text-white border border-blue-500 rounded-lg w-72 h-96 -mt-24">
          <h2>STANDARD</h2>
          <h4 className="text-center">
            Organize across all <br /> apps by hand
          </h4>
          <h3 className="text-blue-500">
            0 <sup>$</sup> Per Month
          </h3>
          <div
            className="flex justify-center items-center gap-5"
            id="innerSave"
          >
            <h6 className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
              <Image src={vector9} alt="" width={100} height={100} />
            </h6>
            <h5>Unlimited product updates</h5>
          </div>
          <div
            className="flex justify-center items-center gap-5"
            id="innerSave"
          >
            <h6 className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
              <Image src={vector9} alt="" width={100} height={100} />
            </h6>
            <h5>Unlimited product updates</h5>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[-100px] md:mt-0 gap-8 p-12 bg-white border border-blue-500 rounded-lg w-72 h-96">
          <h2>PREMIUM</h2>
          <h4 className="text-center">
            Organize across all <br /> apps by hand
          </h4>
          <h3 className="text-blue-500">
            0 <sup>$</sup> Per Month
          </h3>
          <div
            className="flex justify-center items-center gap-5"
            id="innerSave"
          >
            <h6 className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
              <Image src={vector9} alt="" width={100} height={100} />
            </h6>
            <h5>Unlimited product updates</h5>
          </div>
        </div>
      </div>

      {/* Big Component */}
      <div
        className="flex flex-col justify-center items-center h-72 mt-24"
        id="big"
      >
        <h3 className="text-2xl mt-96 md:mt-0 text-center">
          Trusted By Over 4000 Big Companies
        </h3>
        <Brand />
      </div>

      {/* Pricing FAQs */}
      <div
        className="flex flex-col mt-[500px] md:mt-[200px] sm:mt-[200px] justify-center items-center mb-12"
        id="faqs"
      >
        <h2 className="text-3xl">Pricing FAQs</h2>
        <div
          className="grid justify-center gap-10 px-20 py-24 grid-cols-1 md:grid-cols-2"
          id="faqsData"
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-start gap-5">
              <Image
                src={vector7}
                alt="Greater Than Icon"
                width={20}
                height={20}
                className="filter brightness-50"
              />
              <div>
                <h3 className="text-xl">
                  the quick fox jumps over the lazy dog
                </h3>
                <h4 className="text-sm text-gray-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </h4>
              </div>
            </div>
          ))}
        </div>
        <h4 className="text-sm text-gray-500">
          Haven not got your answer? Contact our support
        </h4>
      </div>

      {/* Trial Section */}
      <div>
        <TrialData />
      </div>
    </div>
  );
}

export default Pricing;
