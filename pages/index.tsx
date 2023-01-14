import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Accordion from "../components/Accordion/Accordion";
import Contact from "../components/Contact";
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
      <Projects />
      <Accordion />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
