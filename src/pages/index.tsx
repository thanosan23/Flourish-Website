import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "~/components/ui/aurora-background";
import { FloatingNav } from "~/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Flourish</title>
        <meta name="description" content="Flourish" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative w-full">
        <FloatingNav navItems={navItems} />
        <div>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Gardening made Easy.
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              We make it easy to track your plants.
            </div>
            <Link href="/dashboard">
              <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                Sign Up Now
              </button>
            </Link>
          </motion.div>
        </AuroraBackground>
        </div>
      </main>
    </>
  );
}
