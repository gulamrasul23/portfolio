import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 mt-auto border-t border-slate-200/50 dark:border-slate-800/50 relative z-10 glass rounded-none backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-2 text-foreground">
              Dev<span className="text-blue-500">Portfolio</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center md:justify-start gap-1">
              Made with <FiHeart className="text-rose-500 fill-rose-500" /> & Next.js
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com" icon={<FiGithub size={20} />} />
            <SocialLink href="https://linkedin.com" icon={<FiLinkedin size={20} />} />
            <SocialLink href="https://twitter.com" icon={<FiTwitter size={20} />} />
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
            &copy; {year} DevPortfolio.<br className="hidden md:block" /> All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 glass rounded-full text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 shadow-sm"
    >
      {icon}
    </a>
  );
}
