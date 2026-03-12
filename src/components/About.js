"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="about" ref={containerRef} className=" py-12 lg:py-16 xl:py-20 pt-20 sm:pt-0 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 md:mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">

          {/* Journey Section */}
          <motion.div style={{ y: y1 }} className="glass-card p-4 sm:p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">
              My Journey
            </h3>
            <p className="text-slate-500 leading-relaxed mb-4 font-medium">
              My journey into web development started with the fundamentals: HTML and CSS. I quickly
              advanced to modern JavaScript and immersed myself in the React ecosystem. I love building
              interfaces that are both functional and visually stunning, heavily utilizing tools like
              Tailwind CSS and DaisyUI.
            </p>
            <p className="text-slate-500 leading-relaxed font-medium">
              Today, I specialize in the full MERN stack (MongoDB, Express, React, Node.js) along with
              Next.js, enabling me to build seamless, full-stack applications from database architecture
              to dynamic, responsive frontend.
            </p>
          </motion.div>

          {/* Interests Section */}
          <motion.div style={{ y: y2 }} className="glass-card p-4 sm:p-8 bg-blue-50/30 dark:bg-blue-900/10">
            <h3 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">
              Beyond Coding
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6 font-medium">
              When I'm not pushing pixels or squashing bugs, you can find me exploring new technologies,
              reading about design theory, or enjoying a good cup of coffee.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl text-center">
                <span className="block text-2xl mb-2">🎨</span>
                <span className="font-medium text-sm">UI/UX Design</span>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <span className="block text-2xl mb-2">🎮</span>
                <span className="font-medium text-sm">Gaming</span>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <span className="block text-2xl mb-2">📚</span>
                <span className="font-medium text-sm">Reading</span>
              </div>
              <div className="glass p-4 rounded-xl text-center">
                <span className="block text-2xl mb-2">✈️</span>
                <span className="font-medium text-sm">Traveling</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
