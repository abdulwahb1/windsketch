import React from "react";
import FeatureCard from "../Reusable/FeatureCard";
import { FEATURE_LIST } from "@/constants";

const Feature = () => {
  return (
    <section className="flex flex-col z-0 relative w-full items-center justify-center">
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-0  xl:ml-0 justify-start items-center ">
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
