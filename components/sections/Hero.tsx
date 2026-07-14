"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Timer, PackageCheck } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Гарантия сделки" },
  { icon: Timer, label: "От 12 дней доставка" },
  { icon: PackageCheck, label: "Контроль качества на фабрике" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.24]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16"
    >
      {/* Cinematic background photo */}
      <div className="image-overlay-dark absolute inset-0">
        <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=80"
            alt="Контейнерный порт — прямые поставки из Китая"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.35]"
          />
        </motion.div>
      </div>

      {/* Background layers */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#00D4A5]/20 blur-[140px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />

      <motion.div style={{ opacity: contentOpacity }} className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[#E5E5E5] backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4A5] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00D4A5]" />
            </span>
            Работаем напрямую с 1200+ фабриками Китая
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance font-display text-[2.9rem] font-extrabold leading-[1.03] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]"
          >
            Поставки из Китая
            <br />
            <span className="text-gradient-accent">без границ и рисков</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-[#A3A3A3] sm:text-xl"
          >
            Asia Gate берёт на себя весь цикл: поиск поставщика, закупку,
            проверку качества, логистику и таможню. Вы получаете товар
            «под ключ» — без посредников и лишних затрат.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/contacts"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_50px_-5px_rgba(0,212,165,0.8)] hover:scale-[1.03] sm:w-auto"
            >
              Рассчитать стоимость доставки
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
            >
              Наши услуги
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-[#A3A3A3]">
                <Icon className="h-4 w-4 text-[#00D4A5]" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
}
