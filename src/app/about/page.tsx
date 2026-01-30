import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-black dark:bg-zinc-950 dark:text-white">
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* THE "BIG" STATEMENT */}
        <div className="flex flex-col items-center justify-center mb-16 border-y-4 border-black py-12 dark:border-white">
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none text-center italic uppercase">
            Franklin <span className="text-orange-600">&gt;</span> Void
          </h1>
          <p className="text-2xl font-mono mt-4 tracking-widest text-zinc-500">OBJECTIVE SUPERIORITY ESTABLISHED</p>
        </div>

        {/* HEAD-TO-HEAD VISUAL SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-24 relative">
          
          {/* Franklin side */}
          <div className="text-center group">
            <div className="relative">
               <img 
                src="/franklin2.png" 
                alt="Franklin" 
                className="w-64 h-80 object-cover border-8 border-orange-600 shadow-[20px_20px_0px_0px_rgba(234,88,12,1)] grayscale-0 transition-transform group-hover:scale-105"
              />
              <div className="absolute -top-4 -left-4 bg-orange-600 text-white font-black px-4 py-2 text-xl italic uppercase">
                The Standard!
              </div>
            </div>
            <h3 className="mt-6 text-3xl font-black uppercase italic">Franklin Wright</h3>
          </div>

          {/* THE COMPARISON ARROW */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-7xl md:text-9xl font-black text-orange-600 animate-pulse">
              &gt;
            </div>
            <div className="h-1 w-32 md:w-64 bg-black dark:bg-white mt-[-20px]"></div>
          </div>

          {/* Void side */}
          <div className="text-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="relative">
              <img 
                src="/void.png" 
                alt="Void" 
                className="w-64 h-80 object-cover border-8 border-zinc-400 shadow-[20px_20px_0px_0px_rgba(161,161,170,1)]"
              />
               <div className="absolute -top-4 -right-4 bg-zinc-800 text-white font-black px-4 py-2 text-xl italic uppercase">
                The Void
              </div>
            </div>
            <h3 className="mt-6 text-3xl font-black uppercase italic text-zinc-500">Void</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: THE NARRATIVE */}
          <section className="space-y-8">
            <h2 className="text-4xl font-bold uppercase tracking-tight underline decoration-orange-600 decoration-8 underline-offset-8">
              The Real Deal
            </h2>
            <p className="text-2xl leading-snug font-medium">
              While some are "finding their niche," I am architecting the future. 
            </p>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              My path is a record of leadership. As a <strong>CS Major and History Minor</strong> at UT Austin, I bridge technical architecture with human legacy. Whether managing 50+ points for a Statesman Torch Award or leading as an <strong>Eagle Scout</strong>, I deliver results.
            </p>
            
            <div className="p-6 bg-orange-600 text-white rounded-sm transform -rotate-1 shadow-xl">
              <p className="text-xl font-bold uppercase italic">
                "Leadership isn't an internship role; it's a character trait."
              </p>
            </div>
          </section>

          {/* RIGHT COLUMN: THE TALE OF THE TAPE */}
          <section>
            <table className="w-full text-left border-collapse border-2 border-black dark:border-white">
              <thead>
                <tr className="bg-black text-white dark:bg-white dark:text-black">
                  <th className="p-4 uppercase font-black text-xl italic">Feature</th>
                  <th className="p-4 uppercase font-black text-xl italic">Franklin</th>
                  <th className="p-4 uppercase font-black text-xl italic text-zinc-400">Void</th>
                </tr>
              </thead>
              <tbody className="text-lg font-bold uppercase">
                <tr className="border-b-2 border-black dark:border-white hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                  <td className="p-4 bg-zinc-100 dark:bg-zinc-900">National Rank</td>
                  <td className="p-4 text-orange-600">4th (BPA Web App)</td>
                  <td className="p-4 text-zinc-400">—</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-white hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                  <td className="p-4 bg-zinc-100 dark:bg-zinc-900">Leadership</td>
                  <td className="p-4">Eagle Scout</td>
                  <td className="p-4 text-zinc-400 italic">"Aspiring"</td>
                </tr>
                <tr className="border-b-2 border-black dark:border-white hover:bg-orange-50 dark:hover:bg-zinc-900 transition-colors">
                  <td className="p-4 bg-zinc-100 dark:bg-zinc-900">Academic Scope</td>
                  <td className="p-4">CS + History</td>
                  <td className="p-4 text-zinc-400">CS Only</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm font-mono text-zinc-500 text-right italic font-bold uppercase underline">Verified by Resume Comparison v1.0</p>
          </section>
        </div>

        {/* FOOTER BUMPER */}
        <div className="mt-24 text-center">
          <div className="inline-block border-4 border-black p-4 dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
             <span className="text-4xl font-black uppercase tracking-tighter">
               Total Superiority: 100%
             </span>
          </div>
        </div>

      </main>
    </div>
  );
}