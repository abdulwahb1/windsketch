import React from "react";
import Image from "next/image";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import VideoCard from "../Reusable/VideoCard";
import { videos } from "@/constants/videos";

const Book = () => {
  return (
    <section className=" flex flex-col justify-center items-center mt-[100px] lg:mt-0 relative z-10 w-full ">
      <div
        className="w-screen lg:w-full absolute h-full flex-col justify-start items-center  flex z-10"
        style={{ background: "var(--gradient-dark_orange)" }}
      ></div>
      {/* 1st feature */}
      <div className="z-10 scale-80 lg:mt-[200px]">
        <div className="flex flex-row justify-evenly w-full ">
          <p className="text-[30px] lg:text-[50px] xl:text-[70px] font-geo font-bold text-custom-blue tracking-tight lg:mr-[250px] ml-5">
            ALL YOUR PLANS <br /> IN ONE PLACE, <br /> ACCESSIBLE FROM ANYWHERE
          </p>
          <Image
            src="/icons/icon1.svg"
            alt="icon"
            width={76}
            height={122}
            className="lg:mt-[-10px] hidden lg:block"
          />
          <Image
            src="/icons/icon1.svg"
            alt="icon"
            width={60}
            height={60}
            className="lg:mt-[-10px] mt-[-70px] lg:hidden sm:block mr-5"
          />
        </div>
        <div className="flex items-center w-full xl:w-[1396px] mt-[30px] lg:mt-[60px] z-20 ">
          <VideoCard url={videos[2]} />
        </div>
        <div className="flex flex-col xl:flex-row  z-20 mt-5 lg:mt-10 ">
          <p className="w-full  sm:max-w-none 2xl:w-[700px] font-geo sm:text-[14px] lg:text-[16px] font-normal text-custom-blue text-center xl:text-left">
            WindSketch simplifies the process of drafting and sharing plans. Our
            platform offers intuitive tools that allow users to easily customize
            pre-designed templates to match their specific needs. Creating
            detailed plans becomes a straightforward task. When its time to
            share, doing so with team members and stakeholders is efficient and
            only takes a few clicks. This streamlined approach enhances
            collaboration and keeps all parties informed, without the complexity
            often associated with plan development and distribution.
          </p>
          <div className="flex flex-col xl:flex-row justify-evenly xl:ml-[100px] xl:gap-x-11 items-center gap-y-3 mt-5 xl:mt-0">
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
              variant="btn_dark_blue1"
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

export default Book;
