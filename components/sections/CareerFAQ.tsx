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
    q: "Нужен ли опыт работы?",
    a: "Нет. Мы обучаем с нуля: даём готовые скрипты, обучающие материалы и закрепляем личного наставника на первые недели работы.",
  },
  {
    q: "Как оформляются выплаты?",
    a: "Через самозанятость (НПД). Поможем зарегистрироваться за 10 минут прямо в приложении «Мой налог» — даже если вы делаете это впервые.",
  },
  {
    q: "Сколько часов нужно работать?",
    a: "От 2 часов в день, смены и часы работы выбираете сами — подходит для совмещения с учёбой или другой работой.",
  },
  {
    q: "Какое оборудование понадобится?",
    a: "Смартфон или компьютер со стабильным интернетом. Все рабочие инструменты и доступы предоставляем мы.",
  },
  {
    q: "Как часто выплачивается зарплата?",
    a: "Два раза в месяц — 10 и 25 числа, точно в срок, на карту или счёт самозанятого.",
  },
  {
    q: "Есть ли карьерный рост?",
    a: "Да. Лучшие операторы становятся старшими операторами, наставниками или переходят в отдел байеров с повышением дохода.",
  },
];

export default function CareerFAQ() {
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
            Частые вопросы
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Всё, что нужно знать перед откликом
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
