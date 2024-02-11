import React from "react";
import Image from "next/image";
import { GRID_LIST } from "@/constants";
import ShowcaseCard from "../Reusable/ShowcaseCard";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";

const Showcase = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-[150px]">
      <div className="relative w-screen justify-center items-center flex ">
        <div className="absolute h-[300px] w-full sm:w-[950px] flex justify-between items-center border border-solid border-[#F5944D] border-r-[10px] bg-[#F4944D] shadow-sm_box  shadow-black mt-[200px]">
          <div className="h-[70px] w-[60px] ml-5 mb-[190px]">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </div>
          <div className="flex flex-col justify-center items-center w-[800px]">
            <p className="text-[#0C2796] text-[65px] font-geobold font-bold capitalize">
              Utilize our extensive library of grids
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="hidden sm:block h-72 w-full -z-1">
          <svg
            // width="5120"
            // height="1242"
            viewBox="0 0 1920 1242"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-11 163L1928 0V1079L-11 1242V163Z" fill="#0C2796" />
          </svg>
        </div>
        <div className="flex flex-col sm:flex-row w-full flex-wrap justify-center items-center overflow-x-hidden">
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
      </div>
      <div className="flex flex-col sm:flex-row pt-[106px] justify-evenly w-[600px]">
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
