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
      title: "Plant Disease Detection",
      description: "Trained a decision tree model on a loan prediction dataset to predict loan approval outcomes, helping lenders make data-driven decisions on loan applications.",
      tech: "Python, Numpy, Pandas, Matplotlip, Seaborn, sklearn, scipy",
      image: "/WorkSection2/plant img.jpeg",
      githubLink: "https://github.com/Muskanateeq/Plant-Disease-Detection-Model",
      ColabLink: "https://colab.research.google.com/drive/1gQ7xJ0-f6rz3bUj9G6WHfDxLiNBkARHC"
    },
    {
      id: "02",
      title: "Spam Email Classification",
      description: "Trained a Logistic Regression model on a loan prediction dataset to predict loan approval outcomes, helping lenders make data-driven decisions on loan applications.",
      tech: "Python, Numpy, Pandas, Matplotlip, Seaborn, sklearn, scipy",
      image: "/WorkSection2/spam img.png",
      githubLink: "https://github.com/Muskanateeq/Spam-Email-Classification",
      ColabLink: "https://colab.research.google.com/drive/1wBbgobOBHZPFxOMrQwRI8_NAdPO8xNRb"
    },
    {
      id: "03",
      title: "House Price Prediction",
      description: "Trained a K-Nearest Neighbors (KNN) model on a loan prediction dataset to predict loan approval outcomes, enabling lenders to make data-driven decisions on loan applications.",
      tech: "Python, Numpy, Pandas, Matplotlip, Seaborn, sklearn, scipy",
      image: "/WorkSection2/house img.jpg",
      githubLink: "https://github.com/Muskanateeq/ML-Based-House-Price-Prediction-Model",
      ColabLink: "https://colab.research.google.com/drive/1Ss1UFxHeYhLFX8ZXdo0osdJaJphwK3vm"
    },
    {
      id: "04",
      title: "Loan Approval Prediction",
      description: "Trained a Linear Regression model on a house prediction dataset to predict house price outcomes, enabling lenders to make data-driven decisions on house price applications.",
      tech: "Python, Numpy, Pandas, Matplotlip, Seaborn, sklearn, scipy",
      image: "/WorkSection2/loan approval imag.png",
      githubLink: "https://github.com/Muskanateeq/Machine-Learning-Loan-Prediction-Model",
      ColabLink: "https://colab.research.google.com/drive/1pEsyOKCUiHpr9RaovCR0lySbqoXbf60E"
    },
    {
      id: "04",
      title: "Car Price Prediction",
      description: "Trained a Linear Regression model on a house prediction dataset to predict house price outcomes, enabling lenders to make data-driven decisions on house price applications.",
      tech: "Python, Numpy, Pandas, Matplotlip, Seaborn, sklearn, scipy",
      image: "/WorkSection2/car img.jpg",
      githubLink: "https://github.com/Muskanateeq/ML-Based-Car-Price-Prediction-Model",
      ColabLink: "https://colab.research.google.com/drive/1bzYwX8m79JLFVUEzebtgGhbFFarsuuOm"
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


      <motion.div
        className="bg-gray-800 px-8 py-12 mx-4 md:mx-10 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Existing Heading (optional – you can change or remove it if not needed) */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Artificial Intelligence
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
                    
                  >
                    {project.id}
                  </motion.h2>
                  <motion.h3
                    className="text-2xl font-semibold mt-2"
                    
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mt-4 leading-relaxed text-start"
                    
                  >
                    {project.description}
                  </motion.p>

                  <motion.p
                    className="mt-4 text-teal-400 font-semibold"
                    
                  >
                    {project.tech}
                  </motion.p>

                  <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    <motion.a
                      href={project.ColabLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300"
                      aria-label="External link"

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

                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="flex-1 relative h-72 w-full max-w-md">
                  <motion.a
                    href={project.ColabLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="rounded-lg overflow-hidden w-full h-full shadow-lg"
 
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
