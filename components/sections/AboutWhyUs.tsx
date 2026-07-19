"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const CASES = [
  {
    metric: "×3 оборот",
    title: "Сеть магазинов автотоваров",
    text: "Перевели закупку с посредников на прямые контракты с фабриками — сократили себестоимость товара на 22% и увеличили частоту поставок втрое.",
  },
  {
    metric: "14 дней",
    title: "Селлер на Wildberries",
    text: "Настроили сквозной процесс от закупки до поставки на склад FBO — путь от заказа до карточки товара сократился с 45 до 14 дней.",
  },
  {
    metric: "0 срывов",
    title: "Производитель мебели",
    text: "За 2 года непрерывных поставок комплектующих — ни одной сорванной партии, несмотря на сезонные пики загрузки портов.",
  },
];

const REASONS = [
  {
    title: "Работаем без посредников",
    text: "Свои байеры на фабриках в Китае — вы платите цену производителя, а не наценку перекупщика.",
  },
  {
    title: "Отвечаем за груз на всех этапах",
    text: "От оплаты фабрике до получения на складе в России — одна команда, один договор, одна точка ответственности.",
  },
  {
    title: "Говорим на языке цифр",
    text: "Прозрачная смета по каждой сделке: стоимость товара, логистики, таможни — без скрытых комиссий.",
  },
  {
    title: "Растём вместе с клиентом",
    text: "От пробной партии до контейнерных поставок — подстраиваем формат сотрудничества под масштаб бизнеса.",
  },
];

export default function AboutWhyUs() {
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
            Почему выбирают нас
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Результат, который можно измерить
          </h2>
        </motion.div>

        {/* Reasons */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-white/[0.06] bg-[#161616] p-8 transition-all duration-500 hover:border-[#00D4A5]/25"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-extrabold text-gradient-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{r.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#ADADAD]">{r.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Case studies */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="text-center font-display text-2xl font-bold text-white sm:text-3xl"
          >
            Истории клиентов
          </motion.h3>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {CASES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161616] p-8"
              >
                <Quote className="h-6 w-6 text-[#00D4A5]/40" />
                <div className="mt-5 font-display text-2xl font-extrabold text-gradient-accent">
                  {c.metric}
                </div>
                <h4 className="mt-2 font-display text-base font-semibold text-white">
                  {c.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-[#ADADAD]">{c.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#666666]">
            Обобщённые примеры на основе типичных проектов Asia Gate
          </p>
        </div>
      </div>
    </section>
  );
}
