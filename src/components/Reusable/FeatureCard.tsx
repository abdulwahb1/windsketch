import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  title: React.ReactNode;
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
    <div className="flex flex-col sm:h-[600px] w-[200px] md:w-full h-[300px] sm:w-[350px]  bg-white items-center justify-center shadow-shadow_shadow md:ml-5 rounded-xl">
      <div className="relative ">
        <Image
          src={icon}
          alt={"icon"}
          width={60}
          height={60}
          className="flex sm:hidden mr-5"
        />
        <Image
          src={icon}
          alt={"icon"}
          width={w_1}
          height={h_1}
          className="hidden sm:flex"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <p className="text-[#0C2796] text-[14px] sm:text-[15px] md:text-[30px] font-bold uppercase font-geo tracking-wide">
          {title}
        </p> */}
        {title}

        <div className="flex flex-row mr-auto sm:mt-10 mt-5 pl-5">
          <p className="text-[#7F95F4] text-[16px] md:text-[20px] font-bold ">
            {info}
          </p>

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
