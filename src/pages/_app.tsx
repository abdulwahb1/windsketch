import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className="w-[1920px] flex flex-col m-auto">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
