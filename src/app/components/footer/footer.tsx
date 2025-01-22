import React from "react";
import Image from "next/image";
import twitter from "../../../../public/images/about/twitter.png";
import facebook from "../../../../public/images/about/facebook.png";
import instagram from "../../../../public/images/about/intagram.png";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-20 p-5">
      <div className="flex flex-col justify-start gap-4 items-start w-full max-w-6xl md:pl-[150px] sm:flex-row sm:min-w-full sm:items-center">
        <h2 className="text-2xl font-bold">Bandage</h2>
        <div className="flex gap-5">
          <Image src={facebook} alt="" />
          <Image src={instagram} alt="" />
          <Image src={twitter} alt="" />
        </div>
      </div>

      <hr className="w-full mt-8 h-[2px] bg-gray-300 hidden sm:block"  />

      <div className="flex flex-col justify-between items-start gap-5 w-full max-w-6xl my-12 md:flex-row">
        {[
          {
            title: "Company Info",
            items: ["About Us", "Carrier", "We are hiring", "Blog"],
          },
          {
            title: "Legal",
            items: ["About Us", "Carrier", "We are hiring", "Blog"],
          },
          {
            title: "Features",
            items: [
              "Business Marketing",
              "User Analytic",
              "Live Chat",
              "Unlimited Support",
            ],
          },
          {
            title: "Resources",
            items: ["Business Marketing", "Watch a Demo", "Live Chat", "API"],
          },
        ].map(({ title, items }, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h2 className="text-lg font-bold mb-5">{title}</h2>
            {items.map((item, idx) => (
              <h3 key={idx} className="text-sm text-gray-500">
                {item}
              </h3>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-5">
          <h2 className="text-lg font-bold">Get In Touch</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full max-w-sm p-3 border border-gray-300 rounded-lg text-center"
            />
            <button className="w-32 h-12 bg-blue-500 text-white font-bold rounded-lg">
              Subscribe
            </button>
          </div>
          <h3 className="text-sm text-gray-500">Lore imp sum dolor Amit</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
