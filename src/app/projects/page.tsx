import React from 'react';

const projects = [
  {
    title: "National Web Application",
    award: "4th in the Nation - BPA",
    description: "Architected and developed a full-stack educational platform. Led the technical strategy to secure a top-5 national ranking among thousands of competitors.",
    tags: ["Full-Stack", "Leadership", "Product Design"],
    color: "bg-orange-600"
  },
  {
    title: "Statesman Torch Systems",
    award: "Highest State Honor",
    description: "Developed and managed high-impact service projects, coordinating data across multiple Torch categories to achieve the elite Statesman designation.",
    tags: ["Project Management", "Data Tracking", "Civic Tech"],
    color: "bg-zinc-900"
  },
  {
    title: "Eagle Scout Leadership Engine",
    award: "BSA Distinguished Rank",
    description: "Engineered community-wide solutions and led large teams through complex project lifecycles. 100% success rate on deployment and community impact.",
    tags: ["Organizational Logic", "Strategic Planning", "Real-World Impact"],
    color: "bg-zinc-800"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white font-sans text-black dark:bg-zinc-950 dark:text-white">
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* SECTION HEADER */}
        <div className="mb-16 border-l-8 border-orange-600 pl-8">
          <h1 className="text-7xl font-black uppercase tracking-tighter italic">
            Proven <span className="text-orange-600">Impact</span>
          </h1>
          <p className="text-2xl font-mono mt-2 text-zinc-500 italic">
            Franklin Wright // Superior Project Delivery
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative border-4 border-black dark:border-white p-8 hover:-translate-y-2 hover:-translate-x-2 transition-transform bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(234,88,12,1)]"
            >
              <div className={`inline-block px-3 py-1 mb-4 text-xs font-black uppercase text-white ${project.color}`}>
                {project.award}
              </div>
              
              <h3 className="text-3xl font-black uppercase mb-4 leading-none">
                {project.title}
              </h3>
              
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-bold border-2 border-black dark:border-white px-2 py-1 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* THE "VOID" FOOTER */}
        <div className="mt-24 p-8 border-4 border-dashed border-zinc-300 dark:border-zinc-700 text-center">
          <p className="text-xl font-bold uppercase text-zinc-400 italic">
            Looking for niche Unity tools? Check "The Void." 
            <br />
            Looking for National-Scale Architecture? You're already here.
          </p>
        </div>

      </main>
    </div>
  );
}