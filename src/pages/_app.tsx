import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <NextUIProvider>
      <main className="flex flex-col w-full max-w-[1920px] m-auto">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}