"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const GUARANTEES = [
  {
    title: "Договор на каждую сделку",
    text: "Фиксируем стоимость, сроки и объём поставки в договоре до начала работы — никаких устных договорённостей.",
  },
  {
    title: "Страхование груза",
    text: "Каждая партия застрахована на всех этапах перевозки — от склада фабрики до получения в России.",
  },
  {
    title: "Фиксация курса валюты",
    text: "Курс юаня фиксируется на момент оплаты поставщику — вы не теряете на курсовой разнице во время сделки.",
  },
  {
    title: "Компенсация при браке",
    text: "Если партия не проходит контроль качества на фабрике, мы решаем вопрос с поставщиком до отгрузки — без затрат для вас.",
  },
  {
    title: "Оплата только после подтверждения",
    text: "Деньги переводятся поставщику только после того, как вы подтвердили условия сделки — без предоплаты вслепую.",
  },
  {
    title: "Гарантия возврата средств",
    text: "Если товар не соответствует описанию после приёмки на нашем складе в Москве — мы возвращаем деньги или организуем замену за свой счёт.",
  },
];

export default function ServicesGuarantees() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
              Гарантии Asia Gate
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Каждая сделка защищена
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#ADADAD]">
              Мы берём на себя финансовые и операционные риски прямых
              поставок — вы получаете товар без сюрпризов.
            </p>
            <div className="mt-8 font-display text-5xl font-extrabold text-[#00D4A5]">
              6/6
              <span className="mt-1 block font-sans text-sm font-normal normal-case tracking-normal text-[#ADADAD]">
                обязательств закрыто договором
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
            {GUARANTEES.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex gap-4 py-6 ${i < GUARANTEES.length - (GUARANTEES.length % 2 === 0 ? 2 : 1) ? "border-b border-white/[0.07]" : ""}`}
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#00D4A5]/40">
                  <Check className="h-3 w-3 text-[#00D4A5]" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">
                    {g.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#ADADAD]">
                    {g.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
