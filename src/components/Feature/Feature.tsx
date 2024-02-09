import React from "react";
import FeatureCard from "../Reusable/FeatureCard";
import { FEATURE_LIST } from "@/constants";

const Feature = () => {
  return (
    <section className=" flex flex-col z-10">
      <div className="flex flex-row justify-center items-center ml-3">
        {FEATURE_LIST.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            info={feature.info}
            cta={feature.cta}
            alt1={feature.alt1}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
