"use client";

import { motion } from "framer-motion";

export default function ContactsHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-32 pb-6">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]"
          >
            Контакты
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Свяжитесь с нами
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[#ADADAD]"
          >
            Ответим на вопросы и рассчитаем стоимость поставки в течение 30
            минут в рабочее время.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
