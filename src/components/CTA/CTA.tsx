import Image from "next/image";
import React from "react";
import DemoButton from "../Reusable/DemoButton";
import NowButton from "../Reusable/NowButton";
import { Contact } from "@/components";
const CTA = () => {
  return (
    <section className="lg:flex flex-col justify-center items-center h-full mt-[-150px] w-full ">
      {/* 4th feature */}
      <div className="w-screen lg:w-full absolute flex flex-col -z-10 ">
        <Image
          src="/images/gradient_orange.png"
          width={300}
          height={1}
          alt="gradient"
          className="w-screen lg:h-full h-screen lg:mb-[500px]"
        />
      </div>
      <div className="relative flex justify-center items-center z-10 scale-80">
        <svg
          className="absolute hidden sm:block"
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
        <div className="justify-center items-center flex flex-col mt-[100px] lg:mt-[150px]  z-20">
          <div className="flex flex-row justify-evenly w-full ">
            <p className="text-[35px] lg:text-[70px] font-geo font-bold text-custom-blue tracking-tight xl:mr-[750px] ">
              SCHEDULING <br /> MADE SIMPLE
            </p>
            <Image
              src="/icons/icon5.svg"
              alt="icon"
              width={76}
              height={122}
              className="lg:mt-[-10px] hidden lg:block"
            />
            <Image
              src="/icons/icon5.svg"
              alt="icon"
              width={60}
              height={60}
              className="lg:mt-[-10px] ml-[70px] lg:hidden sm:block mr-5"
            />
          </div>
          <div className="flex flex-col justify-between items-center w-full h-[791px] bg-black rounded-xl mt-[30px] lg:mt-[60px] z-10"></div>
          <div className="flex flex-col sm:flex-row  z-20 mt-5 lg:mt-10 ">
            <p className="w-full  sm:max-w-none sm:w-[700px]  font-geo sm:text-[14px] lg:text-[16px] font-normal text-custom-blue text-center lg:text-left">
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
            <div className="flex flex-col xl:flex-row justify-evenly xl:ml-[100px] xl:gap-x-11 items-center gap-y-3 mt-5 lg:mt-0">
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
