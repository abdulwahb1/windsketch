import React from "react";
import Image from "next/image";

type ShowcaseCardProps = {
  title: React.ReactNode;
  icon: string;
  w_1: number;
  h_1: number;
};

const ShowcaseCard = ({ title, icon, w_1, h_1 }: ShowcaseCardProps) => {
  return (
    <div className="flex flex-col justify-start items-center w-[120px] h-[130px] lg:w-[150px] lg:h-[200px] xl:w-[230px] xl:h-[230px] bg-[#CCD5FB] lg:ml-5  mt-5">
      <div
        className="flex flex-col items-center justify-center w-full h-full"
        style={{ background: "var(--gradient-slate)" }}
      >
        <div className="lg:scale-80">
          <div className=" flex-col justify-center items-center w-full h-1/2 lg:flex hidden">
            {icon !== "" && (
              <Image src={icon} width={w_1} height={h_1} alt="grids" />
            )}
          </div>
          <div
            className="flex-col justify-center items-center w-full h-1/2 lg:hidden flex"
            style={{ width: "auto", height: "auto" }}
          >
            {icon !== "" && (
              <Image
                src={icon}
                width={40}
                height={40}
                alt="grids"
                style={{ width: "auto", height: "auto" }}
              />
            )}
          </div>

          <div className="flex flex-col justify-center items-center">
            {/* <p className="text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
            {title}
          </p> */}
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
