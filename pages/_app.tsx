import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
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
