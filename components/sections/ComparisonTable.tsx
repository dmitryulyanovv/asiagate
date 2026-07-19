"use client";

import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

const ROWS = [
  { label: "Цена закупки", self: "check", agent: "minus", us: "check" },
  { label: "Проверка поставщика", self: "x", agent: "minus", us: "check" },
  { label: "Контроль качества на фабрике", self: "x", agent: "minus", us: "check" },
  { label: "Единая точка ответственности", self: "x", agent: "minus", us: "check" },
  { label: "Таможенное оформление под ключ", self: "x", agent: "check", us: "check" },
  { label: "Прозрачная смета без скрытых комиссий", self: "check", agent: "x", us: "check" },
  { label: "Средний срок первой поставки", self: "long", agent: "medium", us: "fast" },
];

function Cell({ value }: { value: string }) {
  if (value === "check") return <Check className="mx-auto h-5 w-5 text-[#00D4A5]" />;
  if (value === "x") return <X className="mx-auto h-5 w-5 text-white/20" />;
  if (value === "minus") return <Minus className="mx-auto h-5 w-5 text-white/20" />;
  if (value === "long") return <span className="text-sm text-[#ADADAD]">60–90 дней</span>;
  if (value === "medium") return <span className="text-sm text-[#ADADAD]">30–45 дней</span>;
  if (value === "fast") return <span className="text-sm font-semibold text-[#00D4A5]">12–25 дней</span>;
  return null;
}

export default function ComparisonTable() {
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
            Сравнение
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Почему прямая работа с Asia Gate выгоднее
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#161616]"
        >
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center border-b border-white/[0.06] px-4 py-5 sm:px-8">
            <div />
            <div className="text-center text-xs font-medium text-[#ADADAD] sm:text-sm">
              Самостоятельно
            </div>
            <div className="text-center text-xs font-medium text-[#ADADAD] sm:text-sm">
              Через агента
            </div>
            <div className="text-center text-xs font-bold text-[#00D4A5] sm:text-sm">
              Asia Gate
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center px-4 py-4 sm:px-8 ${
                i % 2 === 1 ? "bg-white/[0.02]" : ""
              }`}
            >
              <div className="text-xs leading-snug text-[#E5E5E5] sm:text-sm">{row.label}</div>
              <div className="flex justify-center"><Cell value={row.self} /></div>
              <div className="flex justify-center"><Cell value={row.agent} /></div>
              <div className="flex justify-center"><Cell value={row.us} /></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
