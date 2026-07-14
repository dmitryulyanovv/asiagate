"use client";

import { motion } from "framer-motion";
import { HandCoins, ShieldCheck, Zap, Users } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Надёжность",
    description: "Каждая сделка защищена договором и финансовыми гарантиями.",
  },
  {
    icon: HandCoins,
    title: "Честность",
    description: "Прозрачное ценообразование без скрытых комиссий на любом этапе.",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Оперативная коммуникация и минимальные сроки согласований.",
  },
  {
    icon: Users,
    title: "Человечность",
    description: "Личный менеджер, который говорит с вами на одном языке.",
  },
];

export default function AboutValues() {
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
            Наши ценности
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Принципы, на которых мы строим бизнес
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-[#161616] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#00D4A5]/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-transform duration-500 group-hover:scale-110">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A3A3A3]">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
