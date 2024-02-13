import React from "react";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import VideoCard from "../Reusable/VideoCard";
import Image from "next/image";
import { Feature, Showcase, Book } from "@/components";
import { videos } from "@/constants/videos";

const Hero = () => {
  return (
    <section
      className="flex-col justify-center items-center z-30 flex  2xl:w-full sm:w-screen h-full "
      style={{
        background:
          "linear-gradient(180deg, #0C2796 20%, rgba(62, 97, 251, 0.40) 28%, rgba(127, 149, 244, 0.00) 100%)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center flex-col  xs:scale-80 2xl:scale-95 2xl:mt-[10px] mt-[20px]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-white font-geobold font-bold text-[30px] tracking-wide xs:text-[60px] capitalize  xs:tracking-widest text-center xs:leading-[70px] sm:leading-tight mt-10">
              Simplifying <br className="lg:hidden" /> Blueprints <br />{" "}
              <span className="text-[25px] xs:text-[50px] font-normal font-geo text-center">
                for Window & Door Installation{" "}
              </span>
            </h1>
            <p className="text-[#7F95F4] font-geo xs:text-[18px] font-light text-center xs:mt-[45px] mt-5">
              Book a demo to know how WindSketch Streamlines Floorplans Creation{" "}
              <br />
              for Window and Door Installers.
            </p>
            <div className="flex flex-col sm:flex-row mt-10 justify-evenly gap-5">
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
                icon="/icons/blue-arrow.png"
                variant="btn_golden"
                color="text-[#0C2796]"
                w_4={263}
                h_4={62}
              />
            </div>
            <div className="flex w-full h-full">
              <VideoCard url={videos[1]} />
            </div>
          </div>
          <div className="md:mt-[40px] xl:mt-[200px] m-[80px] w-full xs:mt-[80px]">
            <h2 className="text-[#0C2796] text-[20px] xs:text-[40px] text-center lg:text-[80px] font-bold capitalize font-geo">
              What makes us the best
            </h2>
          </div>
        </div>
      </div>
      <Feature />
      <Showcase />
      <Book />
    </section>
  );
};

export default Hero;
