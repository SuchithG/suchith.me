import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import Accordion from "../components/Accordion/Accordion";
import React from "react";

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
