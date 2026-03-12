"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayout, FiTool } from "react-icons/fi";

const skillsData = [
  {
    category: "Frontend Dev",
    icon: <FiCode size={24} className="text-blue-600 dark:text-blue-400" />,
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React & Next.js"],
  },
  {
    category: "UI & Styling",
    icon: <FiLayout size={24} className="text-cyan-600 dark:text-cyan-400" />,
    skills: ["Tailwind CSS", "DaisyUI", "Responsive Design"],
  },
  {
    category: "Backend & DB",
    icon: <FiTool size={24} className="text-purple-600 dark:text-purple-400" />,
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 lg:py-16 xl:py-20 pt-20 sm:pt-0 relative">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex font-medium text-slate-500 items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-400/10 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
