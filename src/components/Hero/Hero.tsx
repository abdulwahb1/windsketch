import React from "react";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import Image from "next/image";
import { Feature, Showcase, Book } from "@/components";

const Hero = () => {
  return (
    <section
      className="flex-col justify-center items-center z-50 flex  w-full h-full "
      style={{
        background:
          "linear-gradient(180deg, #0C2796 20%, rgba(62, 97, 251, 0.40) 28%, rgba(127, 149, 244, 0.00) 100%)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center flex-col  scale-80 ">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-white font-geobold font-bold text-[60px] capitalize  tracking-widest text-center leading-[70px] sm:leading-tight">
              Simplifying <br className="lg:hidden" /> Blueprints <br />{" "}
              <span className="text-[50px] font-light font-geo text-center">
                for Window & Door Installation{" "}
              </span>
            </h1>
            <p className="text-[#7F95F4] font-geo text-[18px] font-light text-center mt-[45px]">
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
                icon="/icons/arrow.svg"
                variant="btn_golden"
                color="text-[#0C2796]"
                w_4={263}
                h_4={62}
              />
            </div>
            <div className="mt-[80px] h-[300px] w-full  bg-white rounded-xl">
              {/* <Image
              src="/images/hero.png"
              width={375}
              height={810}
              alt="hero image"
              className="mt-[80px] h-[300px] w-[300px] sm:w-[1200px] sm:h-[810px]"
            /> */}
            </div>
          </div>
          <div className="my-[40px]">
            <h2 className="lg:text-[#0C2796] text-white text-[40px] text-center lg:text-[80px] font-bold capitalize font-geo">
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
