import React from "react";
export const NAV_LINKS = [
  { href: "/", text: "About", id: 1 },
  { href: "/", text: "Goal", id: 2 },
  { href: "/", text: "Product", id: 3 },
  { href: "/", text: "Payment Plans", id: 4 },
];

export const FEATURE_LIST = [
  {
    icon: "/icons/icon1.svg",
    w_1: 76,
    h_1: 122,
    title: (
      <p className="text-[#0C2796] text-[10px] xs:text-[12px] sm:text-[15px] lg:text-[15px] 2xl:text-[30px] font-bold uppercase font-geo xs:tracking-wide lg:pl-5  text-center lg:text-left p-2 lg:mb-[35px] sm:mt-5">
        ALL YOUR PLANS IN ONE PLACE, ACCESSIBLE FROM ANYWHERE
      </p>
    ),
    info: "Read More",
    cta: "/icons/small-arrow.svg",
    id: 1,
  },
  {
    icon: "/icons/icon4.svg",
    w_1: 111,
    h_1: 121,
    title: (
      <p className="text-[#0C2796] text-[12px] xs:text-[12px] sm:text-[15px] lg:text-[15px] 2xl:text-[30px] font-bold uppercase font-geo xs:tracking-wide xs:leading-none tracking-wider leading-5 lg:pl-5  mt-4 xs:mt-5 sm:mt-[45px] text-center lg:text-left p-2 lg:mb-[45px] 2xl:mb-[70px]">
        EASY PLAN DRAWING AND SHARING
      </p>
    ),
    info: "Read More",
    cta: "/icons/small-arrow.svg",
    id: 2,
  },
  {
    icon: "/icons/icon2.svg",
    w_1: 104,
    h_1: 122,
    title: (
      <p className="text-[#0C2796] text-[10px] xs:text-[12px] sm:text-[15px] lg:text-[15px] 2xl:text-[30px] font-bold uppercase font-geo tracking-wide lg:pl-5 xs:mt-5 text-center lg:text-left p-2 mb-2">
        AUTOMATIC GENERATION OF ESTIMATES AND CONTRACTS
      </p>
    ),
    info: "Read More",
    cta: "/icons/small-arrow.svg",
    id: 3,
  },
  {
    icon: "/icons/icon3.svg",
    w_1: 122,
    h_1: 108,
    title: (
      <p className="text-[#0C2796] text-[12px] sm:text-[15px] lg:text-[15px] 2xl:text-[30px] font-bold uppercase font-geo tracking-tight lg:pl-5 mt-5 text-center lg:text-left p-2 ">
        Collaborative work, set your schedule using our calendar
      </p>
    ),
    info: "Read More",
    cta: "/icons/small-arrow.svg",
    id: 4,
  },
];

export const GRID_LIST: {
  icon: string;
  w_1: number;
  h_1: number;
  title: React.ReactNode;
  id: number;
}[] = [
  {
    icon: "/images/g1.png",
    w_1: 85,
    h_1: 148,
    title: (
      <p className="text-[9px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HRT3LSB4x2 (view)
      </p>
    ),
    id: 1,
  },
  {
    icon: "/images/g2.png",
    w_1: 134,
    h_1: 146,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        RT2x1-2x1 (view)
      </p>
    ),
    id: 2,
  },
  {
    icon: "/images/g7.png",
    w_1: 85,
    h_1: 166,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        AT3L3x2-3x2 <br /> (view)
      </p>
    ),
    id: 3,
  },
  {
    icon: "/images/g4.png",
    w_1: 134,
    h_1: 146,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        RT5LMB3x1-3x2 (view)
      </p>
    ),
    id: 4,
  },
  {
    icon: "/images/g5.png",
    w_1: 134,
    h_1: 147,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        RT5LSB4x2 (equal)
      </p>
    ),
    id: 5,
  },
  {
    icon: "/images/g6.png",
    w_1: 135,
    h_1: 150,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        RT8LSBT4x2 (equal)
      </p>
    ),
    id: 6,
  },
  {
    icon: "/images/g3.png",
    w_1: 168,
    h_1: 130,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HRT2x1-2x1 (equal)
      </p>
    ),
    id: 7,
  },
  {
    icon: "/images/g8.png",
    w_1: 132,
    h_1: 146,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        AT3L3x2-3x2 (view)
      </p>
    ),
    id: 8,
  },
  {
    icon: "/images/g9.png",
    w_1: 131,
    h_1: 152,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HT4x3-4x2 (view)
      </p>
    ),
    id: 9,
  },
  {
    icon: "/images/g10.png",
    w_1: 181,
    h_1: 134,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HRT2x1-2x1 (equal)
      </p>
    ),
    id: 10,
  },
  {
    icon: "/images/g11.png",
    w_1: 201,
    h_1: 135,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HRT3LMB4x1-4x2
      </p>
    ),
    id: 11,
  },
  {
    icon: "/images/g12.png",
    w_1: 87,
    h_1: 153,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        AT2x1-2x1 (view)
      </p>
    ),
    id: 12,
  },
  {
    icon: "/images/g13.png",
    w_1: 123,
    h_1: 153,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        RT4x2-4x2 (equal)
      </p>
    ),
    id: 13,
  },
  {
    icon: "/images/g15.png",
    w_1: 100,
    h_1: 154,
    title: (
      <p className="text-[10px] xs:text-[12px] mt-5 h-[25px] text-[#0C2796] font-geo font-bold text-center">
        Left or Right <br />
        HRT9LBR-9LBR (view)
      </p>
    ),
    id: 14,
  },
];
