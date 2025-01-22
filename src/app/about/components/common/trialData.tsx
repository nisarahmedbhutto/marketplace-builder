import React from "react";
import trialData from "./trialDataCard";
import Image from "next/image";

function TrialData() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-[30px] mt-[200px] mb-[50px]">
        <h2 className="text-4xl leading-[50px] text-center font-extrabold">Start your 14 days free trial</h2>
        <h5 className="text-[13px] text-[#808080] text-center leading-[20px]">
          Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met
          sent. RELIT official consequent.
        </h5>
        <button className="w-[120px] h-[40px] bg-[#23A6F0] text-white rounded-[10px] border-none">
          Try it free now
        </button>
        <div>
          {trialData.map(({ twitter, facebook, instagram, linkdin }, index) => (
            <div
              className="flex justify-center items-center gap-[20px]"
              key={index}
            >
              <Image src={twitter} alt="" />
              <Image src={facebook} alt="" />
              <Image src={instagram} alt="" />
              <Image src={linkdin} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrialData;
