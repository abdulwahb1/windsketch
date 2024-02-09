import React from "react";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-3 z-10">
      <div
        className="w-screen h-[1442px] flex relative justify-center items-center z-10 "
        style={{ background: "var(--gradient-bg)" }}
      >
        <div className="flex flex-col justify-center items-center w-[1440px]">
          <div className="flex flex-col justify-center items-center mb-[200px]">
            <h1 className="text-white font-geobold font-bold text-[70px] capitalize  tracking-widest text-center w-[900px] leading-[70px]">
              Simplifying Blueprints <br />{" "}
              <span className="text-[50px] font-light font-geo ">
                for Window & Door Installation{" "}
              </span>
            </h1>
            <p className="text-[#7F95F4] font-geo text-[18px] font-light text-center w-[650px] mt-[45px]">
              Book a demo to know how WindSketch Streamlines Floorplans Creation{" "}
              <br />
              for Window and Door Installers.
            </p>
            <div className="flex flex-row mt-10 justify-evenly w-[600px]">
              <NowButton
                type="button"
                title="Start Now"
                variant="btn_dark_blue_outline"
              />
              <DemoButton
                type="button"
                title="Book A Demo"
                icon="/icons/arrow.svg"
                variant="btn_golden"
                color="text-[#0C2796]"
              />
            </div>
            <Image
              src="/images/hero.png"
              width={1200}
              height={810}
              alt="hero image"
              className="mt-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
