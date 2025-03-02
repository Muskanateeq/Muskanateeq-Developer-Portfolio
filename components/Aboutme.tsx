// components/AboutSection.js
"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  // Define your tabs. Adjust names as needed.
  const tabs = ["Main Skills", "Award", "Education & Certification"]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const renderTabContent = () => {
    switch (activeTab) {
      case "Main Skills":
        return (
          <ul className="list-disc ml-6 mt-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        )
      case "Award":
        return (
          <p className="mt-2">
            {/* Replace with your award details */}
            Received multiple awards for design and development excellence.
          </p>
        )
      case "Education & Certification":
        return (
          <p className="mt-2">
            {/* Replace with your education/certification details */}
            B.Sc in Computer Science, Certified Frontend Developer.
          </p>
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Left side: Profile image */}
        <div className="w-full md:w-2/5 mb-6 md:mb-0 flex justify-center md:justify-start">
          <div className="max-w-sm">
            <Image
              src="/images/profile.jpg"
              alt="Profile Photo"
              width={400}
              height={500}
              className="rounded shadow-lg"
            />
          </div>
        </div>

        {/* Right side: About text */}
        <div className="w-full md:w-3/5 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-6 leading-relaxed">
            I&apos;m Muskan, a Frontend Developer with expertise in HTML, CSS, TypeScript, JavaScript, React, Next.js, Tailwind CSS, and Sanity CMS. I specialize in building scalable, high-performance web applications with a focus on clean UI and seamless user experience. I am always eager to learn, adapt, and innovate, ensuring my skills stay aligned with the latest tech trends. My goal is to contribute to impactful projects while inspiring and mentoring aspiring developers.
          </p>

          {/* Tab links as text with underline for the active tab */}
          <div className="flex gap-6 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm transition-colors duration-200 focus:outline-none ${
                  activeTab === tab
                    ? "border-b-2 border-teal-400"
                    : "hover:text-teal-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="text-sm">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  )
}
