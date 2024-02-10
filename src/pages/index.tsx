import {
  Nav,
  Footer,
  Contact,
  CTA,
  Book,
  Drawing,
  Feature,
  Hero,
  Showcase,
} from "@/components";
import React, { Fragment } from "react";
import Head from "next/head";

interface Props {}

export default function Page({}: Props) {
  return (
    <Fragment>
      <Head>
        <title>Windsketch</title>
      </Head>
      <section className="flex flex-col min-w-full min-h-screen items-center">
        <Nav />

        <div
          className="w-screen h-[4724px] flex flex-col items-center z-10"
          style={{ background: "var(--gradient-light_blue) " }}
        >
          <Hero />
          <Feature />
          <Showcase />
          <Book />
          <Drawing />
          <CTA />
          <Contact />

          <Footer />
        </div>
      </section>
    </Fragment>
  );
}
