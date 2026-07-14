"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Ship,
  FileCheck2,
  Warehouse,
  Banknote,
  Store,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Поиск и проверка поставщиков",
    description:
      "Подбираем фабрики под ваш запрос, проверяем юридическую чистоту и репутацию, запрашиваем образцы.",
    points: ["Проверка реестра предприятий", "Запрос и оценка образцов", "Переговоры о цене и условиях"],
  },
  {
    icon: Banknote,
    title: "Закупка товаров",
    description:
      "Выкупаем товар у поставщика по согласованной цене без дополнительных наценок посредников.",
    points: ["Оплата поставщику напрямую", "Контроль условий сделки", "Прозрачная смета расходов"],
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    description:
      "Инспекция товара на производстве перед отгрузкой: фото- и видеоотчёт, выборочная проверка партии.",
    points: ["Инспекция на фабрике", "Фото/видео отчётность", "Проверка соответствия ТЗ"],
  },
  {
    icon: Warehouse,
    title: "Складская консолидация",
    description:
      "Собираем товары от разных поставщиков на нашем складе в Гуанчжоу перед единой отправкой.",
    points: ["Приём грузов от разных фабрик", "Переупаковка и маркировка", "Оптимизация объёма отправки"],
  },
  {
    icon: Ship,
    title: "Международная логистика",
    description:
      "Доставка автотранспортом, ЖД, авиа или морем — подбираем маршрут по срокам и бюджету.",
    points: ["Авто/ЖД/авиа/море", "Страхование груза", "Отслеживание в реальном времени"],
  },
  {
    icon: FileCheck2,
    title: "Таможенное оформление",
    description:
      "Полное юридическое сопровождение: декларирование, сертификация, оплата пошлин.",
    points: ["Подготовка документов", "Сертификация товара", "Расчёт и оплата пошлин"],
  },
  {
    icon: Store,
    title: "Вывод на маркетплейсы",
    description:
      "Помогаем селлерам запустить продажи на Wildberries, Ozon и Яндекс.Маркет по схемам FBO и FBS.",
    points: ["Маркировка и упаковка под требования площадок", "Поставка на склады маркетплейсов", "Настройка карточек и логистики FBO/FBS"],
  },
  {
    icon: CircleDollarSign,
    title: "Финансовое сопровождение и валютный контроль",
    description:
      "Проводим платежи поставщикам в юанях и другой валюте с соблюдением требований валютного контроля.",
    points: ["Валютные переводы поставщикам", "Подготовка документов для банка", "Контроль курса и комиссии на каждом платеже"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161616] p-8 transition-all duration-500 hover:border-[#00D4A5]/25 sm:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00D4A5]/[0.05] blur-3xl transition-all duration-500 group-hover:bg-[#00D4A5]/10" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00D4A5]" />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-[#A3A3A3]">
                {s.description}
              </p>

              <ul className="relative mt-6 flex flex-col gap-2.5 border-t border-white/[0.06] pt-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-[#E5E5E5]">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-[#00D4A5]" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
