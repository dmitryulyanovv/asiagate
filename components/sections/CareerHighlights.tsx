"use client";

import { motion } from "framer-motion";
import { PhoneOff, HandCoins, CalendarCheck2, Sparkles, Users, ShieldCheck } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: PhoneOff,
    title: "Ноль звонков и продаж",
    description: "Только переписка в чатах. Никакого «холодного» обзвона и давления на клиента.",
    span: "lg:col-span-2",
  },
  {
    icon: HandCoins,
    title: "От 370 ₽/час",
    description: "Почасовая оплата + премии за качество ответов.",
    span: "",
  },
  {
    icon: CalendarCheck2,
    title: "Выплаты 10 и 25 числа",
    description: "Два раза в месяц, день в день, без задержек.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "Гибкие смены от 2 часов",
    description: "Планируйте работу вокруг учёбы, другой работы или личных дел.",
    span: "lg:col-span-2",
  },
  {
    icon: Users,
    title: "Наставник с первого дня",
    description: "Готовые скрипты и поддержка, пока не почувствуете уверенность.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Официальный ГПХ + НПД",
    description: "Прозрачное оформление через самозанятость — поможем зарегистрироваться.",
    span: "",
  },
];

export default function CareerHighlights() {
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
            Почему операторы остаются с нами
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Условия, которые говорят сами за себя
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161616] p-8 transition-all duration-500 hover:border-[#00D4A5]/25 ${h.span}`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#00D4A5]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#00D4A5]/10" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-transform duration-500 group-hover:scale-110">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-6 font-display text-lg font-semibold text-white">
                {h.title}
              </h3>
              <p className="relative mt-2.5 max-w-sm text-sm leading-relaxed text-[#A3A3A3]">
                {h.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
