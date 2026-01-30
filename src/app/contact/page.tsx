import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans text-black dark:bg-zinc-950 dark:text-white">
      <main className="max-w-6xl mx-auto px-6 py-24">
        
        {/* HEADER */}
        <div className="mb-20 border-b-8 border-black dark:border-white pb-8">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
            Get In <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-2xl font-mono mt-4 text-zinc-500 uppercase tracking-widest">
            Franklin Wright // Direct Line
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT: THE COMMAND CENTER (YOUR INFO) */}
          <section className="space-y-12">
            <div>
              <h2 className="text-4xl font-black uppercase italic mb-6 flex items-center">
                <span className="w-4 h-4 bg-orange-600 mr-4"></span>
                Official Channels
              </h2>
              <div className="space-y-4 text-2xl font-bold">
                <p className="group cursor-pointer">
                  Email: <span className="text-orange-600 group-hover:underline">franklin.wright@utexas.edu</span>
                </p>
                <p className="group cursor-pointer">
                  LinkedIn: <span className="text-orange-600 group-hover:underline">/in/franklin-wright</span>
                </p>
                <p className="group cursor-pointer text-zinc-400">
                  Location: <span className="text-black dark:text-white">Austin, TX</span>
                </p>
              </div>
            </div>

            <div className="bg-black text-white dark:bg-white dark:text-black p-8 shadow-[15px_15px_0px_0px_rgba(234,88,12,1)]">
              <h3 className="text-xl font-black uppercase mb-2 italic">Priority Access</h3>
              <p className="text-lg opacity-80">
                For inquiries regarding National-scale development, leadership roles, or high-level software architecture. 
              </p>
            </div>
          </section>

          {/* RIGHT: THE REDIRECTION ZONE (VOID STUFF) */}
          <section className="border-4 border-dashed border-zinc-300 dark:border-zinc-700 p-10 flex flex-col justify-center bg-zinc-50 dark:bg-zinc-900/50">
            <div className="mb-8">
              <h2 className="text-3xl font-black uppercase text-zinc-400 mb-4 line-through italic">
                Contacting "The Void"?
              </h2>
              <p className="text-xl text-zinc-500 font-medium italic">
                If you were looking for Muyang Zhou (Void), please reconsider. 
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 border-2 border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold uppercase text-sm italic">
                WARNING: High Risk of "Finding a Niche" instead of getting results.
              </div>
              
              <ul className="space-y-2 text-zinc-400 font-mono text-sm">
                <li>• No National Web Rankings detected.</li>
                <li>• Missing Eagle Scout leadership protocols.</li>
                <li>• Duality of logic/art still in beta.</li>
              </ul>

              <button className="w-full py-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 font-black uppercase tracking-widest cursor-not-allowed">
                Void Contact Disabled
              </button>
              
              <p className="text-center text-xs font-bold text-orange-600 uppercase tracking-tighter">
                Stay on this page for 100% Efficiency.
              </p>
            </div>
          </section>
        </div>

        {/* FOOTER BAR */}
        <div className="mt-32 flex justify-between items-end border-t-2 border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="text-5xl font-black uppercase italic tracking-tighter">
            Franklin <span className="text-orange-600">&gt;</span> Void
          </div>
          <div className="text-sm font-mono text-zinc-400">
            © 2026 // ALL RIGHTS RESERVED
          </div>
        </div>

      </main>
    </div>
  );
}