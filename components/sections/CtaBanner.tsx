"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative bg-[#0A0A0A] pb-24 lg:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0F0F0F] px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <motion.div
            aria-hidden
            className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00D4A5]/25 blur-[100px]"
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Готовы начать поставки без лишних затрат?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-[#A3A3A3]">
              Оставьте заявку — рассчитаем стоимость и сроки доставки вашего
              груза из Китая в течение 30 минут.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contacts"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_40px_-5px_rgba(0,212,165,0.7)] sm:w-auto"
              >
                Получить расчёт
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/career"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
              >
                Вакансии компании
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
