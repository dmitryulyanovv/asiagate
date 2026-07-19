"use client";

import { motion } from "framer-motion";
import { Search, ClipboardCheck, Ship, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Подбор поставщика",
    description:
      "Находим фабрику под ваш запрос, проверяем репутацию и запрашиваем образцы за 24 часа.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Закупка и контроль",
    description:
      "Выкупаем товар, проводим инспекцию качества на производстве перед отгрузкой.",
  },
  {
    icon: Ship,
    number: "03",
    title: "Логистика и таможня",
    description:
      "Организуем доставку авто, ЖД, авиа или морем, берём таможенное оформление на себя.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Доставка «под ключ»",
    description:
      "Привозим груз на ваш склад в любой город России. Отслеживание на каждом этапе.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
            Как мы работаем
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Четыре шага до вашего товара
          </h2>
          <p className="mt-5 text-lg text-[#ADADAD]">
            Прозрачный процесс без скрытых комиссий — вы видите каждый этап
            сделки в личном кабинете.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-[#161616] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00D4A5]/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00D4A5] group-hover:text-[#0A0A0A]">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-3xl font-bold text-white/[0.06] transition-colors duration-500 group-hover:text-[#00D4A5]/20">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#ADADAD]">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-white/10 to-transparent lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
