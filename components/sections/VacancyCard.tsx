"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  ShoppingCart,
  FileText,
  CalendarClock,
  Banknote,
  GraduationCap,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RESPONSIBILITIES = [
  { icon: MessageCircle, text: "Консультация клиентов в чатах (Telegram, WhatsApp)" },
  { icon: ClipboardList, text: "Ответы на вопросы по заказам и доставке" },
  { icon: ShoppingCart, text: "Помощь в оформлении заявок на закупку товаров" },
  { icon: FileText, text: "Фиксация заявок и передача байерам" },
];

const BENEFITS = [
  { icon: CalendarClock, text: "Гибкий график и удалённая работа" },
  { icon: Banknote, text: "Стабильные выплаты 2 раза в месяц" },
  { icon: GraduationCap, text: "Полное обучение + личный наставник" },
  { icon: TrendingUp, text: "Возможность быстрого карьерного роста" },
  { icon: Sparkles, text: "Комфортные условия и современные инструменты" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function VacancyCard() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#161616]"
        >
          {/* Header strip */}
          <div className="relative border-b border-white/[0.06] bg-gradient-to-br from-[#00D4A5]/10 via-transparent to-transparent px-8 py-10 sm:px-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="default">Открыта вакансия</Badge>
                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  Оператор чата поддержки
                </h2>
                <p className="mt-1.5 text-sm text-[#A3A3A3]">
                  Удалённо · Гибкий график · Оформление по ГПХ (НПД)
                </p>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-display text-2xl font-extrabold text-gradient-accent sm:text-3xl">
                  55 000 – 90 000 ₽
                </div>
                <div className="text-xs text-[#A3A3A3]">от 370 ₽/час · оплата почасовая</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <h3 className="font-display text-lg font-semibold text-white">
                Обязанности
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {RESPONSIBILITIES.map((r) => (
                  <motion.li key={r.text} variants={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#E5E5E5]">
                      <r.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#E5E5E5]">{r.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <h3 className="font-display text-lg font-semibold text-white">
                Что вы получаете
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {BENEFITS.map((b) => (
                  <motion.li key={b.text} variants={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00D4A5]/10 text-[#00D4A5]">
                      <b.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#E5E5E5]">{b.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-white/[0.06] bg-white/[0.02] px-8 py-6 sm:px-12">
            <p className="text-xs leading-relaxed text-[#A3A3A3]">
              Оформление — через самозанятость (НПД). Поможем зарегистрироваться
              за 10 минут, даже если вы никогда этого не делали.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
