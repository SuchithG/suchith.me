import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suchith.me</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <AboutMe />
      <Skills />
      <Accordion />
      <Footer />
    </div>
  );
}
