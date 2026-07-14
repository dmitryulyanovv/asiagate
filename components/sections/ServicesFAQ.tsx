"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Какой минимальный объём заказа?",
    a: "Работаем как с небольшими партиями от одной коробки, так и с контейнерными поставками — минимального порога нет.",
  },
  {
    q: "Сколько времени занимает доставка?",
    a: "В среднем от 12 дней при авиадоставке до 35–45 дней при морской перевозке, в зависимости от маршрута и объёма.",
  },
  {
    q: "Как рассчитывается стоимость?",
    a: "Стоимость складывается из цены товара, комиссии за услуги, логистики и таможенных платежей. Смету предоставляем до старта сделки.",
  },
  {
    q: "Что если товар не пройдёт проверку качества?",
    a: "Мы фиксируем несоответствия на этапе инспекции и решаем вопрос с поставщиком до отгрузки — либо доработка, либо отказ от партии.",
  },
];

export default function ServicesFAQ() {
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
            Вопросы и ответы
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            То, что чаще всего спрашивают
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
