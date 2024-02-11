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
      <section className="flex flex-col w-full h-full justify-start items-center">
        <Nav />
        <Hero />
        <Drawing />
        <CTA />
        <Footer />
      </section>
    </Fragment>
  );
}
