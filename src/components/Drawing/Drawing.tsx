import React from "react";
import Image from "next/image";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";

const Drawing = () => {
  return (
    <section className="flex flex-col justify-center items-center md:mt-[400px] mt-[100px] relative z-0">
      <div className="w-screen md:h-[3500px] absolute hidden md:flex flex-col justify-start items-center z-0 ">
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-19 161.5L1920 0.5V3091L-19 3250.5V161.5Z"
            fill="url(#paint0_linear_958_468)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_958_468"
              x1="951"
              y1="1545.01"
              x2="951"
              y2="2712.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7F95F4" />
              <stop offset="1" stopColor="#0C2796" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="z-10 relative ">
        <div className="flex flex-row justify-evenly w-full z-20">
          <p className="text-[30px] md:text-[70px] font-geo font-bold text-custom-blue tracking-tight md:mr-[250px] ml-5">
            EASY PLAN DRAWING <br /> AND SHARING
          </p>
          <Image
            src="/icons/icon4.svg"
            alt="icon"
            width={76}
            height={122}
            className="md:mt-[-10px] hidden md:block"
          />
          <Image
            src="/icons/icon4.svg"
            alt="icon"
            width={60}
            height={60}
            className="md:mt-[-10px] ml-2 md:hidden sm:block mr-5"
          />
        </div>
        <div className="flex flex-col justify-between items-center w-full h-[791px] bg-black rounded-xl mt-[30px] md:mt-[60px] z-10"></div>
        <div className="flex flex-col sm:flex-row  z-20 mt-5 md:mt-10 ">
          <p className="w-full  sm:max-w-none sm:w-[700px]  font-geo sm:text-[14px] md:text-[16px] font-normal text-custom-blue text-center md:text-left">
            WindSketch simplifies the process of drafting and sharing plans. Our
            platform offers intuitive tools that allow users to easily customize
            pre-designed templates to match their specific needs. Creating
            detailed plans becomes a straightforward task. When its time to
            share, doing so with team members and stakeholders is efficient and
            only takes a few clicks. This streamlined approach enhances
            collaboration and keeps all parties informed, without the complexity
            often associated with plan development and distribution.
          </p>
          <div className="flex flex-col sm:flex-row justify-evenly sm:ml-[100px] md:gap-x-11 items-center gap-y-3 mt-5 md:mt-0">
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
      <div className="z-10 relative flex flex-col mt-[100px]">
        <div className="flex flex-row justify-evenly w-full">
          <Image
            src="/icons/icon2.svg"
            alt="icon"
            width={76}
            height={122}
            className="md:mt-[-10px] hidden md:block"
          />
          <Image
            src="/icons/icon2.svg"
            alt="icon"
            width={60}
            height={60}
            className="md:mt-[-10px] ml-2 md:hidden sm:block mr-5"
          />
          <p className="md:text-[70px] text-[30px] font-geo font-bold text-black tracking-tight sm:ml-[550px]  text-right ">
            EASY PLAN DRAWING <br /> AND SHARING
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-full h-[791px] bg-black rounded-xl mt-[30px] md:mt-[60px] z-10"></div>
        <div className="flex flex-col sm:flex-row  z-20 mt-5 md:mt-10 ">
          <p className="w-full  sm:max-w-none sm:w-[700px]  font-geo sm:text-[14px] md:text-[16px] font-normal text-white text-center md:text-left">
            WindSketch simplifies the process of drafting and sharing plans. Our
            platform offers intuitive tools that allow users to easily customize
            pre-designed templates to match their specific needs. Creating
            detailed plans becomes a straightforward task. When its time to
            share, doing so with team members and stakeholders is efficient and
            only takes a few clicks. This streamlined approach enhances
            collaboration and keeps all parties informed, without the complexity
            often associated with plan development and distribution.
          </p>
          <div className="flex flex-col sm:flex-row justify-evenly sm:ml-[100px] md:gap-x-11 items-center gap-y-3 mt-5 md:mt-0">
            <NowButton
              type="button"
              title="Start Now"
              variant="btn_transparent_outline"
              w_4={263}
              h_4={62}
            />
            <DemoButton
              type="button"
              title="Book A Demo"
              icon="/icons/arrow.svg"
              variant="btn_golden"
              color="white"
              w_4={263}
              h_4={62}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Drawing;
