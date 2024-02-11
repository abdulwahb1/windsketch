import Image from "next/image";
import React from "react";
import DemoButton from "../Reusable/DemoButton";
import NowButton from "../Reusable/NowButton";
import { Contact } from "@/components";
const CTA = () => {
  return (
    <section
      className="flex flex-col justify-center items-center h-full pt-20 w-full"
      style={{
        background:
          "linear-gradient(180deg, #F4944D 10%, rgba(62, 97, 251, 0.10) 100%)",
      }}
    >
      <div className="relative flex justify-center items-center z-10">
        <svg
          className="absolute"
          width="1920"
          height="1500"
          viewBox="0 0 1920 1500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-52 183L1955 0V2038.99L-52 2526V183Z"
            fill="url(#paint0_linear_958_505)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_958_505"
              x1="951.5"
              y1="570.7"
              x2="951.5"
              y2="2638.67"
              gradientUnits="userSpaceOnUse"
            ></linearGradient>
          </defs>
        </svg>
        <div className="justify-center items-center flex flex-col mt-[150px] z-20">
          <div className="flex flex-col sm:flex-row justify-evenly w-full ">
            <p className="text-[70px] font-geo font-bold text-custom-blue tracking-tight mr-[750px]">
              SCHEDULING <br /> MADE SIMPLE
            </p>
            <Image
              src="/icons/icon5.svg"
              alt="icon"
              width={122}
              height={108}
              className="mt-[-60px]"
            />
          </div>
          <div className="flex flex-col justify-between items-center w-full sm:w-[1396px] h-[791px] bg-black rounded-xl mt-[60px] z-10"></div>
          <div className="flex flex-col sm:flex-row  z-10  mt-10">
            <p className="w-full max-w-[200px] sm:max-w-none sm:w-[700px] h-[194px] font-geo text-[16px] font-normal text-custom-blue">
              WindSketch simplifies the process of drafting and sharing plans.
              Our platform offers intuitive tools that allow users to easily
              customize pre-designed templates to match their specific needs.
              Creating detailed plans becomes a straightforward task. When its
              time to share, doing so with team members and stakeholders is
              efficient and only takes a few clicks. This streamlined approach
              enhances collaboration and keeps all parties informed, without the
              complexity often associated with plan development and
              distribution.
            </p>
            <div className="flex flex-col sm:flex-row justify-evenly ml-[100px] gap-x-11">
              <NowButton
                type="button"
                title="Start Now"
                variant="btn_transparent"
                w_4={263}
                h_4={62}
              />
              <DemoButton
                type="button"
                title="Book A Demo"
                icon="/icons/arrow_white.svg"
                variant="btn_dark_blue"
                color="white"
                w_4={263}
                h_4={62}
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default CTA;
