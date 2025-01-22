import React from "react";
import Image from "next/image";
import teamData from "./innerTeam";

function InnerTeam() {
  return (
    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[100px] mb-[10px]">
      {teamData.map(({ image, instagram, facebook, twitter }, index) => (
        <div
          className="flex flex-col justify-center items-center gap-[20px] mt-[50px]"
          key={index}
        >
          <Image src={image} alt="" className="w-[300px] h-[250px]" />
          <h3 className="text-[14px]">userName</h3>
          <h2 className="text-[11px]">Profession</h2>

          <div className="flex gap-[20px]">
            <Image src={facebook} alt="" width={20} height={20} />
            <Image src={instagram} alt="" width={20} height={20} />
            <Image src={twitter} alt="" width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InnerTeam;
