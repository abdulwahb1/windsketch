import React from "react";
import Image from "next/image";
import NowButton from "../Reusable/NowButton";
import DemoButton from "../Reusable/DemoButton";

const Book = () => {
  return (
    <section className="z-50 flex flex-col justify-center items-center mt-[400px] relative">
      <div
        className="w-screen absolute h-[1249px] flex flex-col justify-start items-center z-10 mt-[400px]"
        style={{ background: "var(--gradient-dark_orange)" }}
      ></div>
      <div className="flex flex-col sm:flex-row justify-evenly w-full z-20">
        <p className="text-[70px] font-geo font-bold text-custom-blue tracking-tight mr-[250px]">
          ALL YOUR PLANS <br /> IN ONE PLACE, <br /> ACCESSIBLE FROM ANYWHERE
        </p>
        <Image
          src="/icons/icon1.svg"
          alt="icon"
          width={76}
          height={122}
          className="mt-[-200px]"
        />
      </div>
      <div className="flex flex-col justify-between items-center w-full sm:w-[1396px] h-[791px] bg-black rounded-xl mt-[60px] z-20"></div>
      <div className="flex flex-col sm:flex-row  z-20  mt-10">
        <p className="w-full max-w-[200px] sm:max-w-none sm:w-[700px] h-[194px] font-geo text-[16px] font-normal text-custom-blue">
          WindSketch simplifies the process of drafting and sharing plans. Our
          platform offers intuitive tools that allow users to easily customize
          pre-designed templates to match their specific needs. Creating
          detailed plans becomes a straightforward task. When its time to share,
          doing so with team members and stakeholders is efficient and only
          takes a few clicks. This streamlined approach enhances collaboration
          and keeps all parties informed, without the complexity often
          associated with plan development and distribution.
        </p>
        <div className="flex flex-col sm:flex-row justify-evenly ml-[100px] gap-x-11">
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
    </section>
  );
};

export default Book;
