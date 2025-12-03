"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

export default function MethodologySection() {
  const steps = [
    {
      title: "Termisk Detektion",
      number: "01",
      description: "Drönare utrustade med termisk bildteknik detekterar varmblodiga djur via värmesignaturer. Fungerar även i tät vegetation och mörker. Optisk bekräftelse för art och antal.",
      details: [
        "Termisk bildteknik (Thermal Imaging)",
        "Detekterar via värmesignaturer",
        "Fungerar i tät vegetation",
        "Optisk bekräftelse av art och antal",
      ],
    },
    {
      title: "Flyghöjd & Planering",
      number: "02",
      description: "Optimal flyghöjd: 120 meter. Områden delas in i sektioner om ~100 hektar. Parallella flyglinjer i tät skog. Strategiska utsiktspunkter i öppnare skog.",
      details: [
        "Optimal flyghöjd: 120 meter",
        "Sektioner om ~100 hektar",
        "Parallella flyglinjer i tät skog",
        "Strategiska utsiktspunkter i öppnare skog",
      ],
    },
    {
      title: "Optimala Förutsättningar",
      number: "03",
      description: "Klart väder utan nederbörd. Minimal nederbörd eller dimma. Temperaturkontrast mellan djur och omgivning är viktig. Stabil vind under 10 m/s.",
      details: [
        "Klart väder utan nederbörd",
        "Minimal nederbörd eller dimma",
        "Temperaturkontrast är avgörande",
        "Stabil vind under 10 m/s",
      ],
    },
    {
      title: "Stora Ytor & Provytor",
      number: "04",
      description: "Direkt inventering upp till 1500 hektar. För större områden används provytor med uppräkning. Marktäckning måste vara >50% för godkänd data. Geografisk kartläggning av alla observationer.",
      details: [
        "Direkt inventering upp till 1500 hektar",
        "Provytor med uppräkning för större områden",
        "Marktäckning >50% för godkänd data",
        "Geografisk kartläggning av observationer",
      ],
    },
    {
      title: "Datainsamling & Analys",
      number: "05",
      description: "Systematisk flygning över varje sektion. Termiska och optiska bilder samlas in. AI-baserad analys för djursdetektion. Verifiering och kvalitetssäkring av data.",
      details: [
        "Systematisk flygning över varje sektion",
        "Termiska och optiska bilder",
        "AI-baserad analys för djursdetektion",
        "Verifiering och kvalitetssäkring",
      ],
    },
    {
      title: "Rapportering",
      number: "06",
      description: "Faktiska siffror geografiskt kartlagda. Minimipopulation vid undersökningstillfället. Täthet och utbredning visualiserad. Tydliga rapporter med rekommendationer.",
      details: [
        "Faktiska siffror geografiskt kartlagda",
        "Minimipopulation vid undersökningstillfället",
        "Täthet och utbredning visualiserad",
        "Tydliga rapporter med rekommendationer",
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Always reset to first step when component mounts
  useEffect(() => {
    setCurrentStep(0);
  }, []);

  const goToNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // If on last step, scroll to next section
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Array.from(sections).indexOf(sectionRef.current!);
      if (sections[currentSectionIndex + 1]) {
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentStep, steps.length]);

  const goToPrevious = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      // If on first step, scroll to previous section
      const sections = document.querySelectorAll('section');
      const currentSectionIndex = Array.from(sections).indexOf(sectionRef.current!);
      if (sections[currentSectionIndex - 1]) {
        sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [currentStep]);

  // Handle keyboard navigation for this section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if this section is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isInView) {
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            e.stopPropagation();
            goToNext();
          } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            e.stopPropagation();
            goToPrevious();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [goToNext, goToPrevious]);

  const currentStepData = steps[currentStep];

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 snap-start snap-always">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10 w-full max-w-5xl mx-auto px-8"
        >
          <div className="bg-stone-800/60 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-stone-700/50 shadow-2xl">
            {/* Step number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-500/50 mb-8"
            >
              <span className="text-4xl font-bold text-amber-500">{currentStepData.number}</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {currentStepData.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-stone-300 leading-relaxed mb-8"
            >
              {currentStepData.description}
            </motion.p>

            {/* Details list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {currentStepData.details.map((detail, index) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-3" />
                  <span className="text-lg md:text-xl text-stone-300 leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all shadow-lg border border-white/20 flex items-center justify-center"
        aria-label="Föregående steg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all shadow-lg border border-white/20 flex items-center justify-center"
        aria-label="Nästa steg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Step indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentStep
                ? "bg-amber-500 w-8"
                : "bg-stone-600 hover:bg-stone-500"
            }`}
            aria-label={`Gå till steg ${index + 1}`}
          />
        ))}
      </div>

      {/* Step counter */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm font-mono">
        {currentStep + 1} / {steps.length}
      </div>
    </section>
  );
}
