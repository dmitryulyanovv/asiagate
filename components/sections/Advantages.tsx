"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Headphones, Globe2, FileCheck2, Warehouse } from "lucide-react";

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Финансовая гарантия",
    description: "Работаем по договору. Средства защищены на каждом этапе сделки.",
    span: "lg:col-span-2",
  },
  {
    icon: Wallet,
    title: "Прозрачные цены",
    description: "Без скрытых наценок — вся смета видна сразу.",
    span: "",
  },
  {
    icon: Headphones,
    title: "Личный менеджер",
    description: "Сопровождение сделки от заявки до получения груза.",
    span: "",
  },
  {
    icon: Globe2,
    title: "Любой вид транспорта",
    description: "Авто, ЖД, авиа и море — подбираем оптимальный маршрут по срокам и бюджету.",
    span: "lg:col-span-2",
  },
  {
    icon: FileCheck2,
    title: "Таможня под ключ",
    description: "Полное юридическое сопровождение и оформление документов.",
    span: "",
  },
  {
    icon: Warehouse,
    title: "Склад в Китае",
    description: "Консолидация грузов от разных поставщиков на одном складе.",
    span: "",
  },
];

export default function Advantages() {
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
            Почему Asia Gate
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Доверие, подтверждённое цифрами
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161616] p-8 transition-all duration-500 hover:border-[#00D4A5]/25 ${adv.span}`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#00D4A5]/[0.04] blur-2xl transition-all duration-500 group-hover:bg-[#00D4A5]/10" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-transform duration-500 group-hover:scale-110">
                <adv.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-6 font-display text-lg font-semibold text-white">
                {adv.title}
              </h3>
              <p className="relative mt-2.5 max-w-sm text-sm leading-relaxed text-[#A3A3A3]">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
