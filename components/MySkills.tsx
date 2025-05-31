import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaFigma, 
  FaBootstrap, FaDocker,
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss,
  SiPytorch, SiTensorflow, SiNumpy, 
  SiPandas, SiScikitlearn, SiMysql
} from 'react-icons/si';
import { MdAutoGraph, MdShowChart } from 'react-icons/md';

export default function Portfolio() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'PyTorch', icon: <SiPytorch className="text-orange-500" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-blue-400" /> },
    { name: 'Pandas', icon: <SiPandas className="text-red-400" /> },
    { name: 'Matplotlib', icon: <MdShowChart className="text-blue-300" /> },
    { name: 'Seaborn', icon: <MdAutoGraph className="text-purple-400" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-orange-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Technical Expertise
          </h1>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-750 border border-gray-700"
            >
              <div className="text-3xl mb-2">
                {skill.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-300 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}