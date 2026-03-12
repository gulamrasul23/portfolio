"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section id="projects" className="py-12 lg:py-16 xl:py-20 pt-20 sm:pt-0 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card flex flex-col overflow-hidden group h-full"
            >

              <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">

                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMiIgZmlsbD0iIzAwMCI+PC9jaXJjbGU+Cjwvc3ZnPg==')]"></div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute top-  w-full h-auto  group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />


                <h3 className="absolute bottom-4 left-4 z-20 text-white font-bold text-xl group-hover:-translate-y-2 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-rose-500/80 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-30 flex items-center justify-center gap-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white/40 text-white backdrop-blur-sm transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full hover:bg-white/40 text-white backdrop-blur-sm transition-colors">
                    <FiGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-500 flex-1 mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-2 py-1 rounded-md glass bg-white/60 dark:bg-black/40">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-md glass bg-white/60 dark:bg-black/40">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 mt-auto group/link"
                >
                  View Details
                  <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
