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
      "Подбираем 3–5 проверенных фабрик под ваш запрос за 5–7 дней: проверяем лицензии, историю экспорта и отзывы других байеров, прежде чем выходить на переговоры.",
    points: ["Проверка реестра предприятий и лицензий", "Запрос и независимая оценка образцов", "Переговоры о цене и MOQ в вашу пользу"],
  },
  {
    icon: Banknote,
    title: "Закупка товаров",
    description:
      "Выкупаем товар по цене производителя — без наценки посредников, которая обычно съедает 15–30% маржи при закупке через агентов.",
    points: ["Оплата поставщику напрямую в юанях", "Контроль условий и сроков сделки", "Прозрачная смета без скрытых комиссий"],
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    description:
      "Проверяем каждую партию на производстве до отгрузки, чтобы брак и пересорт не долетали до вашего склада и не съедали прибыль на возвратах.",
    points: ["Инспекция на фабрике перед отгрузкой", "Фото- и видеоотчёт по каждой партии", "Выборочная проверка на соответствие ТЗ"],
  },
  {
    icon: Warehouse,
    title: "Складская консолидация",
    description:
      "Собираем товар от нескольких фабрик на одном складе в Гуанчжоу — вы платите за одну отправку вместо нескольких мелких и разрозненных.",
    points: ["Приём грузов от разных поставщиков", "Переупаковка и маркировка под РФ", "Оптимизация объёма — экономия на фрахте"],
  },
  {
    icon: Ship,
    title: "Международная логистика",
    description:
      "Подбираем маршрут под ваш срок и бюджет — от экспресс-доставки авиа за 5–7 дней до бюджетной морской за 30–40 дней.",
    points: ["Авто / ЖД / авиа / море", "Страхование груза на всех этапах", "Отслеживание в реальном времени"],
  },
  {
    icon: FileCheck2,
    title: "Таможенное оформление",
    description:
      "Берём на себя декларирование и сертификацию — грузы клиентов Asia Gate проходят таможню без задержек в 99% случаев.",
    points: ["Подготовка и подача документов", "Сертификация и декларации соответствия", "Расчёт и оплата пошлин без переплат"],
  },
  {
    icon: Store,
    title: "Вывод на маркетплейсы",
    description:
      "Запускаем продажи на Wildberries, Ozon и Яндекс.Маркет под ключ — от маркировки товара до первой поставки на склад площадки.",
    points: ["Маркировка и упаковка под требования площадок", "Поставка на склады маркетплейсов", "Настройка карточек и логистики FBO/FBS"],
  },
  {
    icon: CircleDollarSign,
    title: "Финансовое сопровождение и валютный контроль",
    description:
      "Проводим платежи поставщикам в юанях и другой валюте, полностью закрывая требования валютного контроля — без риска блокировки платежа банком.",
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
              <p className="relative mt-3 text-sm leading-relaxed text-[#ADADAD]">
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
