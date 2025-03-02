"use client"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Image from "next/image"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion } from "framer-motion"

export default function ProjectSection() {
  // Memoize the projects array to prevent unnecessary re-renders
  const projects = useMemo(() => [
    {
      id: "01",
      title: "Medical Website",
      description:
        "Book appointments quickly and easily with our medical website. Patients can view available slots, choose preferred dates and times, and confirm bookings with ease. Designed to provide healthcare services.",
      tech: "React, Next js",
      image: "/WorkSection1/Thumbnail1.png",
      githubLink: "https://github.com/Muskanateeq/Appointment-booking-medical-website",
      vercelLink: "https://appointment-booking-medical-website-uoat.vercel.app/",
    },
    {
      id: "02",
      title: "E-commerce Website",
      description:
        "Build a professional resume quickly with our user-friendly online platform. Enter your details, and our tool generates a polished resume tailored to highlight your skills, experience, and qualifications.",
      tech: "React, Next js",
      image: "/WorkSection1/Thumbnail2.png",
      githubLink: "https://github.com/Muskanateeq/Hackathon-3-Full-Stack-Project",
      vercelLink: "https://hackathon-3-full-stack-website.vercel.app/",
    },
    {
      id: "03",
      title: "Agentia World Website",
      description:
        "Build a professional resume quickly with our user-friendly online platform. Enter your details, and our tool generates a polished resume tailored to highlight your skills, experience, and qualifications.",
      tech: "React, Next js",
      image: "/WorkSection1/Thumbnail3.png",
      githubLink: "https://github.com/Muskanateeq/Agentic-AI-World",
      vercelLink: "https://agentic-ai-world.vercel.app/",
    },
  ], [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Scroll to the selected project
  const scrollToProject = useCallback((index: number) => {
    if (containerRef.current) {
      const container = containerRef.current
      const projectWidth = container.scrollWidth / projects.length
      container.scrollTo({
        left: index * projectWidth,
        behavior: "smooth",
      })
    }
  }, [projects.length])

  // Auto slideshow functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % projects.length
          scrollToProject(newIndex)
          return newIndex
        })
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, projects, scrollToProject])

  // Pause auto slideshow when hovering over the projects
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Handle project click
  const handleProjectClick = useCallback((index: number) => {
    setCurrentIndex(index)
    scrollToProject(index)

    // Reset the timer when manually selecting a project
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      setIsPaused(false)
    }
  }, [scrollToProject])

  return (
    <section className="bg-gray-900 text-white min-h-screen py-24 px-4 md:px-8 lg:px-16">
      {/* New Top Heading */}
      <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }} // Slide down from top
          animate={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 0.5 }} // Animation duration
        >
          My Projects
        </motion.h2>

      <motion.div
        className="bg-gray-800 px-8 py-12 mx-4 md:mx-10 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ boxShadow: "0 0 25px rgba(45, 212, 191, 0.5)" }}
      >
        {/* Existing Heading (optional – you can change or remove it if not needed) */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Modern Web Development
        </motion.h1>

        <div
          ref={containerRef}
          className="overflow-x-auto hide-scrollbar"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex w-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-full flex flex-col md:flex-row items-center gap-8 px-4"
                style={{ scrollSnapAlign: "start" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Project Details */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h2
                    className="text-4xl font-bold text-teal-400"
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(45, 212, 191, 0.7)" }}
                  >
                    {project.id}
                  </motion.h2>
                  <motion.h3
                    className="text-2xl font-semibold mt-2"
                    whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(255, 255, 255, 0.7)" }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mt-4 leading-relaxed text-start"
                    whileHover={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.p
                    className="mt-4 text-teal-400 font-semibold"
                    whileHover={{ textShadow: "0 0 8px rgba(45, 212, 191, 0.7)" }}
                  >
                    {project.tech}
                  </motion.p>

                  <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    <motion.a
                      href={project.vercelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                      aria-label="External link"
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 15px rgba(45, 212, 191, 0.7)",
                        backgroundColor: "#1f2937",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                      aria-label="GitHub link"
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 15px rgba(45, 212, 191, 0.7)",
                        backgroundColor: "#1f2937",
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="flex-1 relative h-72 w-full max-w-md">
                  <motion.a
                    href={project.vercelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div
                      className="rounded-lg overflow-hidden w-full h-full shadow-lg"
                      whileHover={{
                        boxShadow: "0 0 25px rgba(45, 212, 191, 0.7)",
                        scale: 1.03,
                      }}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt="Project thumbnail"
                        className="w-full h-full object-cover"
                        width={7000}
                        height={9000}
                      />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleProjectClick(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-teal-400" : "bg-gray-600"}`}
              whileHover={{ scale: 1.5, boxShadow: "0 0 8px rgba(45, 212, 191, 0.7)" }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
              transition={index === currentIndex ? { repeat: Number.POSITIVE_INFINITY, duration: 2 } : {}}
            />
          ))}
        </div>
      </motion.div>

      {/* Add CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  )
}
