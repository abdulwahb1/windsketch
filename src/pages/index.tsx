import {
  Nav,
  Footer,
  Contact,
  CTA,
  Book,
  Drawing,
  Feature,
  Hero,
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
        <Hero />
        <Feature />
        <Book />
        <Drawing />
        <CTA />
        <Contact />
        <Footer />
      </section>
    </Fragment>
  );
}
