"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Shirt,
  Car,
  Sofa,
  HardHat,
  Sparkles,
  ToyBrick,
  Package,
} from "lucide-react";

const CATEGORIES = [
  { icon: Smartphone, label: "Электроника" },
  { icon: Shirt, label: "Одежда и текстиль" },
  { icon: Car, label: "Автозапчасти" },
  { icon: Sofa, label: "Мебель и интерьер" },
  { icon: HardHat, label: "Стройматериалы" },
  { icon: Sparkles, label: "Косметика" },
  { icon: ToyBrick, label: "Игрушки" },
  { icon: Package, label: "Упаковка" },
];

export default function Categories() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
            Категории товаров
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Поставляем практически всё
          </h2>
          <p className="mt-5 text-lg text-[#ADADAD]">
            Работаем с любыми категориями товаров — от электроники до
            крупногабаритного оборудования.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#161616] px-4 py-8 text-center transition-colors duration-300 hover:border-[#00D4A5]/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00D4A5]/10 text-[#00D4A5]">
                <cat.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-[#E5E5E5]">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
