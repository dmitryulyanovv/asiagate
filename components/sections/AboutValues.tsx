"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    n: "1",
    title: "Надёжность",
    description:
      "Каждая сделка защищена договором, страхованием груза и финансовыми гарантиями на всех этапах — от оплаты фабрике до получения товара.",
  },
  {
    n: "2",
    title: "Честность",
    description:
      "Прозрачное ценообразование без скрытых комиссий: вы видите цену производителя, стоимость логистики и таможни отдельными строками.",
  },
  {
    n: "3",
    title: "Скорость",
    description:
      "Оперативная коммуникация, минимальные сроки согласований и готовые логистические маршруты под любой бюджет и дедлайн.",
  },
  {
    n: "4",
    title: "Человечность",
    description:
      "Личный менеджер ведёт сделку от заявки до получения груза и говорит с вами на одном языке — без формальностей и бюрократии.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
              Наши ценности
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Принципы, на которых мы строим бизнес
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-[3rem_1fr] gap-6 py-8 sm:grid-cols-[4rem_1fr] ${
                  i !== 0 ? "border-t border-white/[0.07]" : ""
                }`}
              >
                <span className="font-display text-2xl font-bold text-[#00D4A5] sm:text-3xl">
                  {v.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#ADADAD] sm:text-base">
                    {v.description}
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
