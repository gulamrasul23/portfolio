"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FiGithub, FiLinkedin, FiTwitter, FiFacebook, FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div ref={textRef} className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-medium tracking-wider uppercase text-blue-600 dark:text-blue-400"
          >
            Frontend Web Developer
          </motion.div>
          
          <h1 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Building Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Web Experiences
            </span>
          </h1>
          
          <p className="hero-text text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto md:mx-0">
            I craft responsive, accessible, and engaging user interfaces with clean code and a focus on premium design aesthetics.
          </p>
          
          <div className="hero-text flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="glass cursor-pointer hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 px-8 py-3 rounded-full font-semibold flex items-center gap-2 group">
              <FiDownload className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </button>
            <Link href="#projects" className="cursor-pointer px-8 py-3 rounded-full font-semibold border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-colors">
              View Work
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="hero-text flex items-center gap-6 mt-12 justify-center lg:justify-start">
            <SocialLink href="https://github.com" icon={<FiGithub size={24} />} />
            <SocialLink href="https://linkedin.com" icon={<FiLinkedin size={24} />} />
            <SocialLink href="https://twitter.com" icon={<FiTwitter size={24} />} />
            <SocialLink href="https://facebook.com" icon={<FiFacebook size={24} />} />
          </div>
        </div>
        
        {/* Profile Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center md:justify-end pt-6 md:pt-12 lg:pt-0 mb-12 lg:mb-0 lg:pr-12"
        >
         <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full p-2 glass">
 
  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 overflow-hidden relative">
    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 mix-blend-overlay" />
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
    <span className="absolute bottom-[-14px] w-full text-center text-white/80 text-sm font-medium tracking-widest uppercase -rotate-1">
      <img src="/images/profile3.PNG" alt="Profile" />
    </span>
  </div>

  
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 border-2 border-blue-400/50 border-t-transparent rounded-full scale-110 shadow-lg drop-shadow-[0_0_10px_theme(colors.blue.400)]"
  />

  <motion.div
    animate={{ rotate: -360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 border-2 border-cyan-400/50 border-b-transparent rounded-full scale-125 drop-shadow-[0_0_15px_theme(colors.cyan.400)]"
  />
</div>
        </motion.div>
        
      </div>
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-200"
    >
      {icon}
    </a>
  );
}
