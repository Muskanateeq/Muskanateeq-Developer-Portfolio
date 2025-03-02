"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center sm:items-start sm:justify-between sm:text-left md:flex-row mt-10 md:mt-20 pt-20 px-8 md:px-16 lg:px-32">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="w-full md:w-1/2 space-y-4"
      >
        <p className="text-lg text-gray-400">Modern Web Developer</p>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hello I&apos;m <span className="text-teal-400">Muskan Ateeq</span>
        </h1>
        <p className="text-lg max-w-md text-gray-300 mx-auto sm:mx-0">
        I&apos;m Modern Web Developer with expertise in Html, CSS, TypeScript, Javascript, React, Next.js, Tailwind CSS, and Sanity CMS. I specialize in building scalable, high-performance web applications with a focus on clean UI and seamless user experience.
        </p>
        <motion.button 
          className="mt-6 mx-auto sm:mx-0 px-6 py-2 border border-teal-800 text-teal-400 rounded-full 
           bg-transparent hover:border-teal-500 hover:bg-gray-900 hover:text-white 
           transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(45,212,191,0.8)]"
>
        <Link href="/contactsection">
          Hire Me
        </Link>
        </motion.button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-8 md:mt-0 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
      >
        <motion.div 
          className="absolute inset-0 rounded-full border-4 animate-rotate-border"
        ></motion.div>
        <div className="relative w-full h-full rounded-full overflow-hidden pb-8">
          <Image
            src="/Hero/profile image.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full object-top"
          />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent overflow-x-hidden"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

