import React from "react";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import Image from "next/image";
import { Feature, Showcase, Book } from "@/components";

const Hero = () => {
  return (
    <section
      className="flex flex-col justify-center items-center pt-3 z-50 w-full"
      style={{
        background:
          "linear-gradient(180deg, #0C2796 20%, rgba(62, 97, 251, 0.40) 28%, rgba(127, 149, 244, 0.00) 100%)",
      }}
    >
      <div className="w-screen h-full flex justify-center items-center flex-col mt-[100px]">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-white font-geobold font-bold text-[70px] capitalize  tracking-widest text-center sm:w-[900px] leading-[70px]">
              Simplifying Blueprints <br />{" "}
              <span className="text-[50px] font-light font-geo ">
                for Window & Door Installation{" "}
              </span>
            </h1>
            <p className="text-[#7F95F4] font-geo text-[18px] font-light text-center sm:w-[650px] mt-[45px]">
              Book a demo to know how WindSketch Streamlines Floorplans Creation{" "}
              <br />
              for Window and Door Installers.
            </p>
            <div className="flex flex-col sm:flex-row mt-10 justify-evenly sm:w-[600px]">
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
            <Image
              src="/images/hero.png"
              width={1200}
              height={810}
              alt="hero image"
              className="mt-[80px] h-[300px] w-[300px] sm:w-[1200px] sm:h-[810px]"
            />
          </div>
          <div className="my-[40px]">
            <h2 className="text-[#0C2796] text-[80px] font-bold capitalize font-geo">
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
