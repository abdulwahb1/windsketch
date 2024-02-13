import React from "react";
import Image from "next/image";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import VideoCard from "../Reusable/VideoCard";
import { videos } from "@/constants/videos";

const Drawing = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center 2xl:mt-[-150px] mt-[-150px] xs:mt-[-150px] sm:mt-[-90px] lg:mt-[-115px] relative z-20 w-full">
      <div className=" w-screen h-full absolute flex flex-col lg:w-full  z-20">
        <Image
          src="/images/gradient_blue.png"
          width={1200}
          height={1200}
          alt="gradient"
          className="w-full h-full  z-20"
        />
      </div>
      {/* 2nd feature */}
      <div className="z-30 relative lg:mt-[200px] mt-[100px] lg:scale-80 scale-80">
        <div className="flex flex-row justify-evenly w-full z-20">
          <p className="text-[30px] lg:text-[70px] font-geo font-bold text-custom-blue tracking-tight xl:mr-[500px] ml-5">
            EASY PLAN DRAWING <br /> AND SHARING
          </p>
          <Image
            src="/icons/icon4.svg"
            alt="icon"
            width={76}
            height={122}
            className="lg:mt-[-10px] hidden lg:block"
          />
          <Image
            src="/icons/icon4.svg"
            alt="icon"
            width={60}
            height={60}
            className="lg:mt-[-10px] ml-2 lg:hidden sm:block mr-5"
          />
        </div>
        <div className="flex items-center w-full xl:w-[1396px] mt-[30px] lg:mt-[60px] z-20 ">
          <VideoCard url={videos[3]} />
        </div>
        <div className="flex flex-col xl:flex-row  z-20 mt-5 lg:mt-10 ">
          <p className="w-full  sm:max-w-none sm:w-[700px]  font-geo sm:text-[14px] lg:text-[16px] font-normal text-white text-center lg:text-left">
            WindSketch simplifies the process of drafting and sharing plans. Our
            platform offers intuitive tools that allow users to easily customize
            pre-designed templates to match their specific needs. Creating
            detailed plans becomes a straightforward task. When its time to
            share, doing so with team members and stakeholders is efficient and
            only takes a few clicks. This streamlined approach enhances
            collaboration and keeps all parties informed, without the complexity
            often associated with plan development and distribution.
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
      {/* 3rd feature */}
      <div className="z-30 relative flex flex-col mt-[-100px] scale-80">
        <div className="flex flex-row justify-evenly w-full">
          <Image
            src="/icons/icon2.svg"
            alt="icon"
            width={76}
            height={122}
            className="lg:mt-[-10px] hidden lg:block"
          />
          <Image
            src="/icons/icon2.svg"
            alt="icon"
            width={60}
            height={60}
            className="lg:mt-[-10px] ml-2 lg:hidden sm:block mr-5"
          />
          <p className="lg:text-[70px] text-[30px] font-geo font-bold  text-white tracking-tight xl:ml-[550px]  text-right ">
            EASY PLAN DRAWING <br /> AND SHARING
          </p>
        </div>
        <div className="flex items-center w-full xl:w-[1396px] mt-[30px] lg:mt-[60px] z-20 ">
          <VideoCard url={videos[4]} />
        </div>
        <div className="flex flex-col xl:flex-row  z-20 mt-5 lg:mt-10 ">
          <p className="w-full  sm:max-w-none sm:w-[700px]  font-geo sm:text-[14px] lg:text-[16px] font-normal text-white text-center lg:text-left">
            WindSketch simplifies the process of drafting and sharing plans. Our
            platform offers intuitive tools that allow users to easily customize
            pre-designed templates to match their specific needs. Creating
            detailed plans becomes a straightforward task. When its time to
            share, doing so with team members and stakeholders is efficient and
            only takes a few clicks. This streamlined approach enhances
            collaboration and keeps all parties informed, without the complexity
            often associated with plan development and distribution.
          </p>
          <div className="flex flex-col xl:flex-row justify-evenly xl:ml-[100px] xl:gap-x-11 items-center gap-y-3 mt-5 lg:mt-0">
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
              variant="btn_golden2"
              color="white"
              w_4={263}
              h_4={62}
            />
          </div>
        </div>
        <div className="pb-10"></div>
      </div>
    </section>
  );
};

export default Drawing;
