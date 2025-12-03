"use client";

import { motion } from "framer-motion";

export default function ThermalSection() {
  const benefits = [
    "Detekterar djur i tät vegetation",
    "Fungerar dygnet runt",
    "95% noggrannhet",
    "Minimal störning av djuren"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-amber-50 via-stone-100 to-amber-50 snap-start snap-always">
      {/* Subtle background texture */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(180, 83, 9, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(120, 53, 15, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-stone-900"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-sm md:text-base font-semibold text-amber-500 uppercase tracking-wider mb-6 px-4 py-2 rounded-full bg-amber-50/80 border border-amber-500/30 backdrop-blur-sm"
            >
              Fördelar
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-stone-900"
            >
              Viltinventering
              <br />
              med <span className="text-amber-500">
                värmekamera
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-stone-700 mb-8 leading-relaxed"
            >
              Genom avancerad termisk bildteknik kan vi se det osynliga. Varmblodiga djur kan detekteras även i tät vegetation där vanliga kameror missar dem.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-stone-800">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Image display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300/50"
            >
              <img
                src="/Älg2.JPG"
                alt="Viltinventering med värmekamera"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            </motion.div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="bg-amber-50/90 backdrop-blur-md rounded-xl p-4 border border-amber-500/30 text-center shadow-lg">
                <div className="text-3xl font-bold text-amber-500 mb-1">95%</div>
                <div className="text-sm text-stone-700">Noggrannhet</div>
              </div>
              <div className="bg-stone-100/90 backdrop-blur-md rounded-xl p-4 border border-stone-300 text-center shadow-lg">
                <div className="text-3xl font-bold text-stone-800 mb-1">24/7</div>
                <div className="text-sm text-stone-700">Fungerar dygnet runt</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

