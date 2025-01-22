import Image from "next/image";
import twitter from "../../../../public/images/contact/Vector (11).png";
import facebook from "../../../../public/images/contact/logos_facebook.png";
import instagram from "../../../../public/images/contact/Vector (13).png";
import linkdin from "../../../../public/images/contact/Vector (14).png";
import technology from "../../../../public/images/contact/technology 1.png";
import arow from "../../../../public/images/contact/Arrow 2.png";
import phone from "../../../../public/images/contact/Vector (5).png";
import location from "../../../../public/images/contact/Vector (15).png";
import email from "../../../../public/images/contact/email.png";

import React from "react";

function Contect() {
  return (
    <div className="mt-[100px] mb-[50px] justify-center items-center">
      <div className="flex flex-col gap-[150px] justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <h4>CONTACT US</h4>
          <h2 className="text-[45px] text-center font-extrabold">
            Get in touch today!
          </h2>
          <h3 className="text-[17px] leading-[23px] text-gray-500 text-center">
            We know how large objects will act, but things on a small scale
          </h3>
          <h5 className="text-[25px]">Phone ; +451 215 215 </h5>
          <h5 className="text-[25px]">Fax : +451 215 215</h5>
          <div className="flex gap-[30px]">
            <Image src={twitter} alt="" />
            <Image src={facebook} alt="" />
            <Image src={instagram} alt="" />
            <Image src={linkdin} alt="" />
          </div>
        </div>
        <div className="w-[300px] h-[300px] bg-[#f7d8dd] rounded-full flex justify-center items-center pt-[300px] pl-[30px] mb-[200px]">
          <Image src={technology} alt="" width={1100} height={1100} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[30px] mt-[200px] mb-[50px]">
        <h3 className="text-[15px] text-gray-500">VISIT OUR OFFICE</h3>
        <h2 className="text-[35px] text-center">
          We help small businesses <br /> with big ideas
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex flex-col  items-center gap-[30px] mt-[50px] rounded-md p-10">
            <Image src={phone} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button className="w-[150px] h-[40px] rounded-[20px] text-[#23A6F0] border border-[#23A6F0]">
              Submit Request
            </button>
          </div>

          <div className="flex flex-col items-center gap-[30px] mt-[50px] bg-[#252B42]  text-white p-[20px] h-[400px] w-[300px]">
            <Image src={location} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button className="w-[150px] h-[40px] rounded-[20px] text-[#23A6F0] border border-[#23A6F0]">
              Submit Request
            </button>
          </div>

          <div className="flex flex-col items-center gap-[30px] mt-[50px]  rounded-md p-10">
            <Image src={email} alt="" />
            <h5>georgia.young@example.com</h5>
            <h5>georgia.young@ple.com</h5>
            <h5>Get Support</h5>
            <button className="w-[150px] h-[40px] rounded-[20px] text-[#23A6F0] border border-[#23A6F0]">
              Submit Request
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[30px] mt-[50px]">
          <Image src={arow} alt="" />
          <h3 className="text-[18px]">WE Cant WAIT TO MEET YOU</h3>
          <h2 className="text-[35px]">Lets Talk</h2>
          <button className="w-[150px] h-[40px] bg-[#23A6F0] rounded-[10px] text-white border-none">
            Try it free now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contect;
