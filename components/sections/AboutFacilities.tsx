"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1200&q=80",
    alt: "Штабелирование контейнеров в порту отгрузки",
    caption: "Отгрузка из порта — контроль на каждом этапе",
    span: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Рабочее место менеджера Asia Gate",
    caption: "Личный менеджер сопровождает сделку",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
    alt: "Проверка партии товара перед отправкой",
    caption: "Приёмка и проверка партии на складе",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Команда Asia Gate на рабочей встрече",
    caption: "Команда, которая ведёт сделку от и до",
    span: "lg:col-span-2",
  },
];

export default function AboutFacilities() {
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
            Наши мощности
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Инфраструктура, а не обещания на словах
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-flow-dense lg:auto-rows-[240px] lg:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative min-h-[220px] overflow-hidden rounded-3xl border border-white/[0.08] ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-base font-semibold text-white sm:text-lg">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
