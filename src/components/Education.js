"use client";

import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const edData = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Institute of Science and Technology(IST)",
    year: "2023 - Present",
    description: "Focus on software engineering, web development and algorithms.",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Notredame College Mymensingh",
    year: "2020 - 2021",
    description: "Science stream with a focus on Mathematics and Physics.",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Fulbaria Shahid Smriti School & College",
    year: "2018 - 2019",
    description: "Science stream with a focus on Mathematics and Physics.",
  }
];

export default function Education() {
  return (
    <section id="education" className="py-12 lg:py-16 xl:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {edData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-0 mb-4 md:mb-8 last:mb-0"
            >
              <div className="md:flex items-center gap-4 md:gap-8 glass-card p-6 md:p-8 relative">
                
                {/* Timeline connector (hidden on small screens, shown on md using absolute positioning isn't needed here if we just use a card layout, let's keep it simple and clean with glass cards) */}
                <div className="flex-shrink-0 mb-4 md:mb-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full glass bg-green-500/10 text-green-500 dark:text-green-400">
                  <FiBookOpen size={28} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{item.degree}</h3>
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full glass bg-white/50 dark:bg-black/50 mt-2 md:mt-0">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-green-600 dark:text-green-400 mb-3">{item.institution}</h4>
                  <p className="text-slate-500">
                    {item.description}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
