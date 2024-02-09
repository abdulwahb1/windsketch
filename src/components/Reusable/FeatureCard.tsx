import React from "react";
import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  title: string;
  info: string;
  cta: string;
  alt1: string;
};

const FeatureCard = ({ icon, title, info, cta, alt1 }: FeatureCardProps) => {
  return (
    <div className="flex flex-col w-[404px] h-[477px] bg-white shadow-sm items-center justify-center">
      {icon}
      <div className="flex flex-col w-[363px] items-start">
        {title}
        <div className="flex flex-row">
          {info}{" "}
          <span className="ml-2">
            <Image src={cta} alt={alt1} width={40} height={40} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
