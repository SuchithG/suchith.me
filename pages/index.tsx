import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container px-8">
      <Head>
        <title>suchith.me</title>
        <meta name="description" content="suchith.me by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex flex-1 flex-col justify-center items-center">
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <h1 className="m-auto leading-tight text-6xl items-center min-[320px]:text-center">
            Welcome to Suchith&apos;s Space!
          </h1>
        </motion.div>
      </main>

      <footer className="flex flex-1 py-2 border-y border-solid border-indigo-100 justify-center items-center">
        Website under construction...
      </footer>
    </div>
  );
}
