"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 snap-start snap-always">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-block text-sm md:text-base font-semibold text-amber-500 uppercase tracking-wider mb-6 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
          >
            Kontakt
          </motion.span>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/NYDKLOGO.png"
              alt="Drönarkompaniet Logo"
              className="h-24 md:h-32 lg:h-40 w-auto object-contain"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white"
          >
            <motion.span
              className="text-amber-500 inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                  "0 0 40px rgba(245, 158, 11, 0.8)",
                  "0 0 20px rgba(245, 158, 11, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Drönarkompaniet
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
          className="space-y-8"
        >
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
            className="bg-stone-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-stone-700/50 shadow-xl"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <a
                href="tel:0709780908"
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white hover:text-amber-500 transition-colors duration-300"
              >
                0709-780908
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, type: "spring" }}
            className="bg-stone-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-stone-700/50 shadow-xl"
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
                className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center flex-shrink-0"
              >
                <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <a
                href="mailto:info@dronarkompaniet.se"
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-white hover:text-amber-500 transition-colors duration-300 break-all"
              >
                info@dronarkompaniet.se
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

