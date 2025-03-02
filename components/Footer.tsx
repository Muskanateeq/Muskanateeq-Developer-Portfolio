"use client"
import { motion, useAnimation } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"

export default function Footer() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    })
  }, [controls])

  return (
    <motion.footer
      initial={{ y: 20 }}
      animate={controls}
      className="bg-gray-900 py-6 mt-0" // Added mt-0 to ensure no top margin
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Name with Animation */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl font-bold text-white mb-4 md:mb-0"
          >
            <Link href="/" className="hover:text-teal-400 transition-colors duration-300">
              Muskan<span className="text-teal-400 ml-1">.</span>
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex space-x-4"
          >
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              whileHover={{
                y: -5,
                scale: 1.2,
                filter: "drop-shadow(0 0 8px rgb(45 212 191 / 0.5))",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
              whileHover={{
                y: -5,
                scale: 1.2,
                filter: "drop-shadow(0 0 8px rgb(45 212 191 / 0.5))",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}





