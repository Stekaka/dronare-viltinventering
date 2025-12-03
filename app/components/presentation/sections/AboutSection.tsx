"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-stone-900 to-amber-50 snap-start snap-always">
      {/* Large background images - organic, asymmetrical layout */}
      
      {/* Top left - large image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-4 left-4 md:top-12 md:left-12 w-[180px] h-[135px] sm:w-[240px] sm:h-[180px] md:w-[480px] md:h-[360px] lg:w-[540px] lg:h-[405px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/HåkanPyro1.JPG"
          alt="Pyro"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Bottom left - medium image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-4 left-2 md:bottom-16 md:left-8 w-[160px] h-[120px] sm:w-[220px] sm:h-[165px] md:w-[420px] md:h-[315px] lg:w-[480px] lg:h-[360px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/Ullevigatan1.JPG"
          alt="Ullevigatan"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Top right - large image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-4 right-4 md:top-12 md:right-12 w-[180px] h-[135px] sm:w-[240px] sm:h-[180px] md:w-[480px] md:h-[360px] lg:w-[540px] lg:h-[405px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/UlleviHåkan1.JPG"
          alt="Ullevi"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Bottom right - medium image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-4 right-2 md:bottom-16 md:right-8 w-[160px] h-[120px] sm:w-[220px] sm:h-[165px] md:w-[420px] md:h-[315px] lg:w-[480px] lg:h-[360px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/Hjort1.JPG"
          alt="Hjort"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center left - new image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50, y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/2 -translate-y-1/2 left-2 md:left-8 w-[150px] h-[112px] sm:w-[200px] sm:h-[150px] md:w-[380px] md:h-[285px] lg:w-[440px] lg:h-[330px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/OCBolaget1.JPG"
          alt="OC Bolaget"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Center right - new image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50, y: 0 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-1/2 -translate-y-1/2 right-2 md:right-8 w-[150px] h-[112px] sm:w-[200px] sm:h-[150px] md:w-[380px] md:h-[285px] lg:w-[440px] lg:h-[330px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-10"
      >
        <img
          src="/LandskampDam1.JPG"
          alt="Landskamp Dam"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main content - centered, no background card */}
      <div className="relative z-30 text-center max-w-4xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-8 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] px-4"
        >
          Vilka är vi?
          <br />
          <span className="text-amber-500 drop-shadow-[0_4px_12px_rgba(245,158,11,0.6)]">
            {/* Drönarkompaniet */}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl mx-auto space-y-4 md:space-y-6 px-4"
        >
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed font-medium text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Vi är experter på drönarteknologi med fokus på viltinventering, miljöövervakning och säkerhet.
          </p>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Med avancerad termisk bildteknik och AI-baserad analys levererar vi exakta och pålitliga resultat.
          </p>
        </motion.div>

        {/* Specialiseringar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6 md:mt-8 max-w-4xl mx-auto px-4"
        >
          {[
            { name: "Viltinventering" },
            { name: "Event & Säkerhet" },
            { name: "Värmesök" },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 md:px-8 md:py-4 shadow-xl border-2 border-stone-300 hover:border-amber-500 transition-all duration-300 hover:scale-105 touch-manipulation">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-stone-800">
                  {category.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
