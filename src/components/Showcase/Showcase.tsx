import React from "react";
import Image from "next/image";
import { GRID_LIST } from "@/constants";
import ShowcaseCard from "../Reusable/ShowcaseCard";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";

const Showcase = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[90px] lg:mt-[150px]">
      <div className="relative w-screen justify-center items-center flex ">
        <div className="absolute h-[150px] lg:h-[300px] w-[350px] md:w-[950px] flex justify-between items-center border border-solid border-[#F5944D] border-r-[10px] bg-[#F4944D] shadow-sm_box  shadow-black mt-[150px]">
          <div className="lg:ml-5 lg:mb-[190px] mb-[95px] p-2 lg:p-0">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden lg:block"
            >
              <rect
                x="2"
                y="2"
                width="56"
                height="56"
                rx="8"
                stroke="#0C2796"
                strokeWidth="4"
              />
              <rect
                x="16"
                y="16"
                width="28"
                height="28"
                rx="4.60714"
                stroke="#0C2796"
                strokeWidth="4"
              />
              <path d="M30 15V44M44 30H16" stroke="#0C2796" strokeWidth="4" />
            </svg>
            <svg
              width="35"
              height="35"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden sm:block"
            >
              <rect
                x="1.991"
                y="2.23026"
                width="49.6655"
                height="49.6655"
                rx="6.31655"
                stroke="#0C2796"
                strokeWidth="3.15827"
              />
              <rect
                x="15.9532"
                y="16.1922"
                width="22.1079"
                height="22.1079"
                rx="3.63765"
                stroke="#0C2796"
                strokeWidth="3.15827"
              />
              <path
                d="M27.0071 15.4026V38.3001M38.061 27.2461H15.9531"
                stroke="#0C2796"
                strokeWidth="3.15827"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-[#0C2796] lg:text-[65px] text-[25px] text-center font-geobold font-bold capitalize lg:p-10 p-3">
              Utilize our extensive library of grids
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-72 w-full -z-1">
          <svg
            // width="5120"
            // height="1242"
            viewBox="0 0 1920 1242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden xl:block "
          >
            <path d="M-11 163L1928 0V1079L-11 1242V163Z" fill="#0C2796" />
          </svg>
          <Image
            src="/images/bg-feature.png"
            width={300}
            height={1}
            alt="bg-feature"
            className="w-screen h-screen sm:hidden block mt-[30px]"
          />
        </div>
        <div className="flex-row w-full flex-wrap justify-center items-center overflow-x-hidden hidden sm:flex">
          {GRID_LIST.map((grid) => (
            <ShowcaseCard
              key={grid.id}
              icon={grid.icon}
              title={grid.title}
              w_1={grid.w_1}
              h_1={grid.h_1}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 w-full justify-center items-center overflow-x-hidden overflow-y-hidden lg:hidden sm:block p-2">
          {GRID_LIST.slice(0, 6).map((grid) => (
            <ShowcaseCard
              key={grid.id}
              icon={grid.icon}
              title={grid.title}
              w_1={grid.w_1}
              h_1={grid.h_1}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-[20px] lg:pt-[106px] justify-evenly lg:w-[600px] gap-y-5 scale-75 lg:scale-100">
        <NowButton
          type="button"
          title="Start Now"
          variant="btn_dark_blue_outline"
          w_4={263}
          h_4={62}
        />
        <DemoButton
          type="button"
          title="Book A Demo"
          icon="/icons/arrow.svg"
          variant="btn_golden"
          color="text-[#0C2796]"
          w_4={263}
          h_4={62}
        />
      </div>
    </section>
  );
};

export default Showcase;
