import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "~/components/ui/aurora-background";
import { FloatingNav } from "~/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { WobbleCard } from "~/components/ui/wobble-card";

export default function Home() {

  const navItems = [
    {
      name: "Home",
      link: "/#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "mailto:p.thanosan23@gmail.com",
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
      <main className="relative w-full scroll-smooth focus:scroll-auto">
        <p className="absolute top-4 left-4 text-2xl font-bold dark:text-white z-10">Flourish.</p>
        <FloatingNav navItems={navItems} />
        <div id="home">
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
                  Get Started
                </button>
              </Link>
            </motion.div>
          </AuroraBackground>
        </div>
        <div className="p-10 bg-gray-900" id="about">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Track the health of your plants.
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  Keep track of metrics such as soil moisture and temperature of your plant, allowing you to make informed decisions on how to care for your plants.
                </p>
              </div>
              {/* <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              /> */}
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                AI-powered.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Using ML, we make recommendations on how to optimize the health of your plants.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Fully-remote.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  We get it, you're busy. That's why we made it easy to track your plants from anywhere.
                </p>
              </div>
              {/* <Image
                src="/linear.webp"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              /> */}
            </WobbleCard>
          </div>
        </div>
      </main>
    </>
  );
}
