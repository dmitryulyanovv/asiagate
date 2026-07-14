"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Поиск и аудит поставщиков напрямую на фабриках Гуанчжоу, Иу и Шэньчжэня",
  "Закупка и оплата без посредников — вы видите реальную цену производителя",
  "Контроль качества на производстве до отгрузки: фото- и видеоинспекция партии",
  "Мультимодальная логистика: авто, ЖД, авиа и море — под срок и бюджет",
  "Таможенное оформление и сертификация «под ключ» на стороне получателя",
  "Вывод товара на маркетплейсы — Wildberries, Ozon, Яндекс.Маркет (FBO/FBS)",
];

export default function CompanyOverview() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 h-[420px] overflow-hidden rounded-3xl border border-white/[0.08] lg:order-1 lg:h-[560px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1600&q=80"
              alt="Контейнерный терминал — международная логистика Asia Gate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#0A0A0A]/70 p-5 backdrop-blur-md">
              <div className="font-display text-2xl font-extrabold text-gradient-accent">
                8500+
              </div>
              <div className="mt-0.5 text-sm text-[#E5E5E5]">
                поставок «под ключ» из Китая в Россию
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
              Кто мы
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Логистический и торговый партнёр полного цикла
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#A3A3A3]">
              Asia Gate закрывает всю цепочку прямых поставок из Китая — от
              поиска надёжного производителя до выдачи товара на складе в
              России или размещения на маркетплейсе. Собственные склады в
              Гуанчжоу и Иу, штат байеров на местах и отлаженные таможенные
              процедуры позволяют нам гарантировать сроки и прозрачность
              каждой сделки — будь то одна коробка образцов или контейнерная
              партия.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#A3A3A3]">
              Мы работаем как с начинающими селлерами, так и с крупными
              оптовыми закупщиками, подстраивая формат сотрудничества под
              масштаб и специфику бизнеса.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-[#E5E5E5]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
