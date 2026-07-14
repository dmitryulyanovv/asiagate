"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wallet, Clock, Home, ArrowDown } from "lucide-react";

const QUICK_FACTS = [
  { icon: Wallet, label: "55 000 – 90 000 ₽", sub: "в месяц + премии" },
  { icon: Clock, label: "От 2 часов", sub: "смены на выбор" },
  { icon: Home, label: "100% удалённо", sub: "из любой точки" },
];

export default function CareerHero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16">
      <div className="image-overlay-dark absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
          alt="Удалённая работа за ноутбуком — оператор чата поддержки"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.3]"
        />
      </div>
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00D4A5]/20 blur-[140px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#00D4A5]/30 bg-[#00D4A5]/10 px-4 py-1.5 text-xs font-semibold text-[#00D4A5]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4A5] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D4A5]" />
            </span>
            Открыт набор — старт обучения на этой неделе
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-balance font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Оператор чата поддержки
            <br />
            <span className="text-gradient-accent">работа удалённо</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-[#A3A3A3]"
          >
            Помогайте клиентам Asia Gate в Telegram и WhatsApp: отвечайте на
            вопросы по заказам, фиксируйте заявки и передавайте их байерам.
            Без опыта — обучаем с нуля.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#apply"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-9 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_40px_-5px_rgba(0,212,165,0.7)]"
            >
              Откликнуться за 2 минуты
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#161616] px-6 py-6"
              >
                <fact.icon className="h-5 w-5 text-[#00D4A5]" />
                <span className="font-display text-xl font-bold text-white">
                  {fact.label}
                </span>
                <span className="text-xs text-[#A3A3A3]">{fact.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
