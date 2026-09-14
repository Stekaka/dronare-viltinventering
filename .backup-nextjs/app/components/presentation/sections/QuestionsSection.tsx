"use client";

import { motion } from "framer-motion";

export default function QuestionsSection() {
  const questions = [
    "Har ni tidigare erfarenhet av drönare i viltsammanhang?",
    "Är älgpopulationen det främsta intresset även hos er, eller finns andra arter ni vill fokusera på?",
    "Vad tror ni att en drönarbaserad inventering brukar kosta?",
    "Och vad skulle du själv säga är en rimlig kostnad för en sådan inventering?",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 snap-start snap-always">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-8">
        {/* Header - compact */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight text-white"
          >
            Har ni några{" "}
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
              frågor?
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Questions grid - 2 columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
              className="bg-stone-800/60 backdrop-blur-md rounded-xl p-4 md:p-5 border border-stone-700/50 shadow-lg hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1, type: "spring" }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center"
                >
                  <span className="text-sm font-bold text-amber-500">{index + 1}</span>
                </motion.div>
                <p className="text-base md:text-lg text-stone-200 leading-snug flex-1">
                  {question}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action - compact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-6"
        >
          <p className="text-lg md:text-xl text-stone-300">
            Vi är här för att svara på alla era frågor!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

