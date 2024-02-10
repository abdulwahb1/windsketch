import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  title: string;
  info: string;
  cta: string;
  w_1: number;
  h_1: number;
};

const FeatureCard = ({
  icon,
  title,
  info,
  cta,
  w_1,
  h_1,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col w-[360px] h-[500px] bg-white items-center justify-center shadow-shadow_shadow ml-5 rounded-xl">
      <div className="relative">
        <Image src={icon} alt={"icon"} width={w_1} height={h_1} className="" />
      </div>
      <div className="flex flex-col justify-center items-center w-[330px] pl-2 mt-[50px] ">
        <p className="text-[#0C2796] text-[30px] font-bold uppercase font-geo h-[180px] tracking-wide">
          {title}
        </p>

        <div className="flex flex-row mr-auto w-[328px] mt-10">
          <p className="text-[#7F95F4] text-[20px] font-bold ">{info}</p>

          <Image
            src={cta}
            alt={"arrow"}
            width={40}
            height={40}
            className="mt-[-5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
