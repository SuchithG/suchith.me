import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        <Component {...pageProps} />
        <Accordion />
        <Footer />
      </ThemeProvider>
    </>
  );
}
