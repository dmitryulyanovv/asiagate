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
    q: "Какой минимальный объём или сумма закупки для старта работы?",
    a: "Минимального порога нет: работаем и с одной коробкой образцов, и с контейнерными партиями. Для крупных объёмов условия по цене и срокам становятся выгоднее.",
  },
  {
    q: "Как устроена оплата — договор, счета, поэтапные платежи?",
    a: "Заключаем договор до старта сделки с фиксацией цены и сроков. Оплата обычно идёт поэтапно: аванс поставщику после согласования образца, остаток — перед отгрузкой.",
  },
  {
    q: "Что происходит, если партия не проходит контроль качества?",
    a: "Несоответствия фиксируются на этапе инспекции на фабрике — до отгрузки. Дальше решаем вопрос с поставщиком: доработка партии, замена или отказ от неё без потерь для вас.",
  },
  {
    q: "Можно ли отслеживать груз в реальном времени?",
    a: "Да, предоставляем статус груза на каждом этапе — от отгрузки с фабрики до прохождения таможни и прибытия на склад в России.",
  },
  {
    q: "Работаете ли с ИП, самозанятыми и ООО?",
    a: "Да, работаем со всеми формами — физлицами, ИП, самозанятыми и ООО. Формат договора и документооборот подбираем под ваш статус.",
  },
  {
    q: "Помогаете ли с сертификацией под конкретную категорию товара?",
    a: "Да, подбираем нужный вид сертификации или декларации соответствия под категорию товара и берём оформление на себя.",
  },
  {
    q: "Сколько занимает первая поставка от заявки до получения груза?",
    a: "В среднем от 12 дней при авиадоставке до 35–45 дней при морской перевозке — зависит от маршрута, объёма и загруженности портов.",
  },
  {
    q: "Как рассчитывается итоговая стоимость?",
    a: "Стоимость складывается из цены товара у поставщика, комиссии за услуги, логистики и таможенных платежей. Подробную смету предоставляем до старта сделки — без скрытых комиссий.",
  },
];

export default function ServicesFAQ() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
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
