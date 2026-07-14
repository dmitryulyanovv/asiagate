"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-balance font-display text-3xl font-bold text-white sm:text-4xl">
              Начинали с малого — выросли в надёжного логистического партнёра
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#A3A3A3]">
              Asia Gate начала работу как небольшая команда закупщиков,
              которая помогала предпринимателям находить поставщиков в Китае.
              Сегодня мы — компания полного цикла с собственными складами в
              Гуанчжоу и Иу, штатом байеров на местах и отлаженной логистикой
              в любой регион России.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#A3A3A3]">
              За это время мы выстроили собственную сеть проверенных фабрик,
              отработали таможенные схемы для десятков товарных категорий и
              научились запускать поставщиков на маркетплейсы без лишних
              посредников. Каждый этап — от первого запроса до получения
              груза — проходит под контролем одной команды.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#A3A3A3]">
              Мы верим, что международная торговля должна быть простой и
              прозрачной — без языкового барьера, скрытых наценок и рисков
              потери груза.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="relative h-64 overflow-hidden rounded-2xl border border-white/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
                alt="Собственный склад Asia Gate в Гуанчжоу"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#161616] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5]">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                Наша миссия
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A3A3A3]">
                Сделать прямые поставки из Китая доступными для бизнеса любого
                масштаба — от одной коробки до контейнерных партий.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#161616] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5]">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                Наше видение
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#A3A3A3]">
                Стать первым выбором для предпринимателей, которые ищут
                надёжного партнёра для масштабирования закупок в Азии.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

