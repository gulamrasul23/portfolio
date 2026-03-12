"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";


const expData = [];

const handleGitTouch = (e, href) => {
  e.preventDefault();
  const element = document.getElementById(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 lg:py-16 xl:py-20 pt-20 sm:pt-0 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        {expData.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {expData.map((item, idx) => (
              <div key={idx} className="glass-card p-8">
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center glass-card p-6 sm:p-12 bg-purple-50/30 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800"
          >
            <div className="w-20 h-20 mx-auto glass rounded-full flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
              <FiBriefcase size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4">Open to Opportunities!</h3>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              I am currently looking for an exciting position as a Frontend Developer.
              If you have a project or a role that fits my skills, I`d love to hear from you.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleGitTouch(e, 'contact')}
              className="inline-block px-8 py-3 rounded-full font-bold text-white bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/30"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
