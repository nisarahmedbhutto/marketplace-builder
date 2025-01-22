import Image from "next/image";
import featureData from "./features";
import React from "react";

function Feature() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-16 mb-48 gap-4 flex-wrap
    sm:flex-row
    "
    >
      {featureData.map(
        (
          {
            image,
            newData,
            google,
            heading,
            time,
            treding,
            comments,
            discreption,
            more,
          },
          index
        ) => (
          <div
            key={index}
            className="flex flex-col items-center w-[300px] h-auto bg-white shadow-md
            
            "
          >
            <div className="w-full h-[250px]">
              <Image
                src={image}
                alt="image"
                width={300}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col p-5 gap-5 border-t border-gray-200">
              <div className="flex gap-4 text-gray-400 text-sm">
                <h3 className="text-blue-400">{google}</h3>
                <h3>{treding}</h3>
                <h3>{newData}</h3>
              </div>
              <div className="flex flex-col gap-4 text-gray-700">
                <h2 className="text-lg font-semibold">{heading}</h2>
                <p className="text-sm text-gray-500">{discreption}</p>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Image src={time} alt="" width={16} height={16} />
                  <span>22 April 2021</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={comments} alt="" width={16} height={16} />
                  <span>10 comments</span>
                </div>
              </div>
              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                {more}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Feature;
