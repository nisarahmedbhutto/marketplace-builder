import React from "react";
import Image from "next/image";
import teamData from "./innerTeamData";

function Team() {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:mx-4 gap-5 my-24">
      {teamData.map(({ image, instagram, facebook, twitter }, index) => (
        <div key={index} className="flex flex-col items-center gap-8">
          <Image
            src={image}
            alt=""
            className="w-72 h-48"
            width={1200}
            height={1200}
            quality={100}
          />
          <h3 className="text-base">userName</h3>
          <h2 className="text-sm">Profession</h2>
          <div className="flex gap-5">
            <Image src={facebook} alt="" width={20} height={20} />
            <Image src={instagram} alt="" width={20} height={20} />
            <Image src={twitter} alt="" width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
