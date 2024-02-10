import React from "react";
import FeatureCard from "../Reusable/FeatureCard";
import { FEATURE_LIST } from "@/constants";
import Image from "next/image";

const Feature = () => {
  return (
    <section className=" flex flex-col z-0 relative w-full items-center justify-center">
      <div className="flex flex-row justify-start items-center ml-3">
        {FEATURE_LIST.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            info={feature.info}
            cta={feature.cta}
            w_1={feature.w_1}
            h_1={feature.h_1}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
