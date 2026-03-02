import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

// Note: Next 15 `params` in page components are natively awaitable (Promise-like),
// but we can destructure if we specify the component as async, or access directly.
// It is recommended to `await params` in Next 15 App Router.
export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-500 transition-colors mb-8 font-medium"
        >
          <FiArrowLeft /> Back to Portfolio
        </Link>
        
        <div className="glass-card p-4 sm:p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 font-semibold transition-colors"
            >
              <FiGithub /> Source Code
            </a>
          </div>

          <div className="aspect-video w-full glass rounded-xl mb-12 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-400 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-orange-500/20 mix-blend-overlay" />
            <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute  inset-0 w-full h-full object-cover  group-hover:scale-110 transition-transform duration-500" 
                />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-slate-500 leading-relaxed text-lg">
                  {project.description}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <p className="text-slate-500 leading-relaxed">
                  {project.challenges}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                <p className="text-slate-500 leading-relaxed">
                  {project.improvements}
                </p>
              </section>
            </div>
            
            <div className="space-y-8">
              <section className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/50 dark:bg-black/30 border border-white/20 dark:border-white/5">
                      {tech}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

      </div>
      
      {/* Background blobs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-rose-400/10 dark:bg-rose-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </article>
  );
}

// Generate static params for possible project slugs if deployed statically
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
