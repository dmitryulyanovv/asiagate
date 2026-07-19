"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Wallet,
  Clock,
  MapPin,
  Briefcase,
  CheckCircle2,
  Clock3,
  BellRing,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EASE = [0.16, 1, 0.3, 1] as const;

const VACANCIES = [
  {
    id: "chat-operator",
    title: "Оператор чата поддержки",
    open: true,
    facts: [
      { icon: Wallet, label: "55 000 – 90 000 ₽" },
      { icon: Clock, label: "Смены от 2 часов" },
      { icon: MapPin, label: "Удалённо" },
      { icon: Briefcase, label: "Без опыта" },
    ],
    salaryNote: "от 370 ₽/час · оплата почасовая · ГПХ (НПД)",
    responsibilities: [
      { icon: MessageCircle, text: "Консультация клиентов в чатах (Telegram, WhatsApp)" },
      { icon: ClipboardList, text: "Ответы на вопросы по заказам и доставке" },
      { icon: ShoppingCart, text: "Помощь в оформлении заявок на закупку товаров" },
      { icon: FileText, text: "Фиксация заявок и передача байерам" },
    ],
    requirements: [
      "Грамотная письменная речь",
      "Уверенное пользование смартфоном и мессенджерами",
      "Доступ к интернету от 2 часов в день",
      "Стрессоустойчивость и вежливость в переписке",
    ],
    benefits: [
      { icon: CalendarClock, text: "Гибкий график и удалённая работа" },
      { icon: Banknote, text: "Стабильные выплаты 2 раза в месяц" },
      { icon: GraduationCap, text: "Полное обучение + личный наставник" },
      { icon: TrendingUp, text: "Возможность быстрого карьерного роста" },
      { icon: Sparkles, text: "Комфортные условия и современные инструменты" },
    ],
    footnote:
      "Оформление — через самозанятость (НПД). Поможем зарегистрироваться за 10 минут, даже если вы никогда этого не делали.",
  },
  {
    id: "procurement-manager",
    title: "Менеджер по работе с поставщиками",
    open: false,
    statusLabel: "Вакансия временно закрыта",
    statusText:
      "Набор на эту позицию приостановлен — мы полностью укомплектовали команду закупок. Оставьте отклик, и мы свяжемся с вами, как только откроется новый набор.",
  },
  {
    id: "logistics-manager",
    title: "Менеджер по логистике и таможне",
    open: false,
    statusLabel: "На рассмотрении кандидатов",
    statusText:
      "Сейчас мы рассматриваем отклики, которые уже получили, и пока не набираем новых кандидатов на эту позицию. Следите за обновлениями — вакансия может открыться снова.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function VacancyCard() {
  const [active, setActive] = useState(0);
  const vacancy = VACANCIES[active];

  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-8 flex max-w-5xl flex-wrap gap-2.5"
        >
          {VACANCIES.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "border-[#00D4A5] bg-[#00D4A5]/10 text-[#00D4A5]"
                  : "border-white/10 bg-white/[0.02] text-[#ADADAD] hover:border-white/25 hover:text-white"
              }`}
            >
              {v.title}
              {!v.open && (
                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {vacancy.open ? (
            <motion.div
              key={vacancy.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#161616]"
            >
              {/* Header strip */}
              <div className="relative border-b border-white/[0.06] bg-gradient-to-br from-[#00D4A5]/10 via-transparent to-transparent px-8 py-10 sm:px-12">
                <Badge variant="default">Открыта вакансия</Badge>
                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  {vacancy.title}
                </h2>
                <p className="mt-1.5 text-sm text-[#ADADAD]">{vacancy.salaryNote}</p>

                {/* Quick facts row */}
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {vacancy.facts!.map((f) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-start gap-2 rounded-xl border border-white/[0.06] bg-[#0A0A0A]/60 px-4 py-3.5"
                    >
                      <f.icon className="h-4 w-4 text-[#00D4A5]" />
                      <span className="font-display text-sm font-bold leading-tight text-white sm:text-base">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-2">
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
                  <h3 className="font-display text-lg font-semibold text-white">Обязанности</h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {vacancy.responsibilities!.map((r) => (
                      <motion.li key={r.text} variants={item} className="flex items-start gap-3.5">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#E5E5E5]">
                          <r.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm leading-relaxed text-[#E5E5E5]">{r.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Требования</h3>
                  <ul className="mt-5 flex flex-col gap-3">
                    {vacancy.requirements!.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-[#ADADAD]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
                  <h3 className="font-display text-lg font-semibold text-white">Что вы получаете</h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {vacancy.benefits!.map((b) => (
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
                <p className="text-xs leading-relaxed text-[#ADADAD]">{vacancy.footnote}</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={vacancy.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mx-auto flex max-w-3xl flex-col items-center overflow-hidden rounded-3xl border border-white/[0.08] bg-[#161616] px-8 py-16 text-center sm:px-12"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.06] text-[#ADADAD]">
                {vacancy.id === "logistics-manager" ? (
                  <Clock3 className="h-6 w-6" />
                ) : (
                  <BellRing className="h-6 w-6" />
                )}
              </div>
              <Badge variant="outline" className="mt-6">
                {vacancy.statusLabel}
              </Badge>
              <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                {vacancy.title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#ADADAD]">
                {vacancy.statusText}
              </p>
              <button
                onClick={() => setActive(0)}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#00D4A5]/40 hover:bg-[#00D4A5]/10"
              >
                Посмотреть открытую вакансию «Оператор чата»
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
