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
    <div className="flex flex-col w-[130px] h-[160px] xs:w-[180px] xs:h-[200px] sm:w-[200px] sm:h-[250px] lg:w-[200px] lg:h-[300px] 2xl:w-[350px] 2xl:h-[490px] bg-white items-center justify-center shadow-shadow_shadow 2xl:ml-0 rounded-xl">
      <div className="mt-0 2xl:mt-0">
        <div className="relative flex justify-center items-center">
          {/* Mobile Icon 290px above */}
          <Image
            src={icon}
            alt={"icon"}
            width={40}
            height={40}
            className="hidden xs:flex 2xl:hidden "
          />
           {/* Mobile Icon 290px below */}
          <Image
            src={icon}
            alt={"icon"}
            width={30}
            height={30}
            className="flex xs:hidden "
          />
            {/* Desktop Icon */}
          <Image
            src={icon}
            alt={"icon"}
            width={w_1}
            height={h_1}
            className="hidden 2xl:flex lg:p-5 "
          />
        </div>
        <div className="flex flex-col justify-start items-start w-full">
          {/* <p className="text-[#0C2796] text-[14px] sm:text-[15px] lg:text-[30px] font-bold uppercase font-geo tracking-wide">
          {title}
        </p> */}
          {title}

          <div className="flex flex-row items-center mr-auto  lg:mt-0 pl-2 xs:pl-5">
            <p className="text-[#7F95F4] text-[10px] xs:text-[12px] lg:text-[12px]  2xl:text-[20px] font-bold ">
              {info}
            </p>
            {/* Desktop icon */}
            {/* <Image
              src={cta}
              alt={"arrow"}
              width={35}
              height={35}
              className="hidden sm:block mt-[-8px]"
            /> */}
            {/* Mobile Icon */}
            {/* <Image
              src={cta}
              alt={"arrow"}
              width={30}
              height={30}
              className="block sm:hidden mt-[-5px]"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="hidden sm:block"
            >
              <path
                d="M20 10L30 19.925L20 30"
                stroke="#7F95F4"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22V18ZM30 18H10V22H30V18Z"
                fill="#7F95F4"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              className="block sm:hidden"
            >
              <path
                d="M20 10L30 19.925L20 30"
                stroke="#7F95F4"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22V18ZM30 18H10V22H30V18Z"
                fill="#7F95F4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
