"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/3 h-[460px] w-[460px] rounded-full bg-[#00D4A5]/[0.18] blur-[130px]"
        animate={{ opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]"
          >
            О компании
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance font-display text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl"
          >
            Мост между китайским
            <br />
            <span className="text-gradient-accent">производством и вашим бизнесом</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[#A3A3A3]"
          >
            Asia Gate — логистическая и торговая компания, которая берёт на
            себя весь путь товара: от переговоров с фабрикой в Гуанчжоу до
            выгрузки на вашем складе в России.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
