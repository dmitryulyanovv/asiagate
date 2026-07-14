"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { year: "2018", title: "Основание компании", text: "Первые закупки для малого бизнеса из Москвы и Санкт-Петербурга." },
  { year: "2020", title: "Открытие склада в Гуанчжоу", text: "Собственная площадка для консолидации грузов от разных поставщиков." },
  { year: "2022", title: "Штат байеров на местах", text: "Личное присутствие на фабриках для контроля качества перед отгрузкой." },
  { year: "2025", title: "8500+ поставок", text: "Работаем с бизнесом от частных предпринимателей до крупных сетей." },
];

export default function AboutTimeline() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
            Наш путь
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            От первой сделки до полного цикла логистики
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-[#00D4A5]/40 via-white/10 to-transparent sm:left-1/2" />
          <div className="flex flex-col gap-10">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden sm:block sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                  }`}
                >
                  <span className="font-display text-2xl font-bold text-[#00D4A5]">
                    {m.year}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{m.text}</p>
                </div>

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#00D4A5]/30 bg-[#0A0A0A] font-display text-xs font-bold text-[#00D4A5] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  {m.year.slice(2)}
                </div>

                <div className="flex-1 sm:hidden">
                  <span className="font-display text-xl font-bold text-[#00D4A5]">
                    {m.year}
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold text-white">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">{m.text}</p>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
