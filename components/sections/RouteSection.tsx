"use client";

import { motion } from "framer-motion";
import RouteVisual from "@/components/sections/RouteVisual";

export default function RouteSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
            Маршрут груза
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            От фабрики до вашего склада
          </h2>
          <p className="mt-5 text-lg text-[#ADADAD]">
            Один и тот же груз проходит все этапы под контролем одной команды —
            без передачи между разными подрядчиками.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/[0.08] bg-[#111111] p-8 sm:p-14">
          <RouteVisual />
        </div>
      </div>
    </section>
  );
}
