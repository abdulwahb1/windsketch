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
    <div className="flex flex-col justify-start items-center w-[100px] h-[110px] xs:w-[120px] xs:h-[130px] lg:w-[130px] lg:h-[120px] xl:w-[230px] xl:h-[230px] bg-[#CCD5FB] m-auto mt-5 lg:ml-5 rounded-xl overflow-hidden">
      <div
        className="flex flex-col items-center justify-center w-full h-full rounded-xl xs:rounded-none scale-110 xs:scale-100	"
        style={{ background: "var(--gradient-slate)" }}
      >
        <div className="">
          <div className=" flex-col justify-center items-center w-full h-1/2 xl:flex hidden xl:mt-6">
            {icon !== "" && (
              <Image src={icon} width={w_1} height={h_1} alt="grids" />
            )}
          </div>
          <div className="flex-col justify-center items-center w-full h-1/2 xl:hidden flex lg:mt-5 ">
            {icon !== "" && (
              <Image
                src={icon}
                width={40}
                height={40}
                alt="grids"
                className=" "
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
