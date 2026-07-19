"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ship, Plane, Truck as TruckIcon } from "lucide-react";

type Mode = "sea" | "air" | "auto";

const MODES: { id: Mode; label: string; icon: typeof Ship; days: [number, number]; rate: number }[] = [
  { id: "sea", label: "Море", icon: Ship, days: [35, 45], rate: 180 },
  { id: "auto", label: "Авто/ЖД", icon: TruckIcon, days: [18, 25], rate: 320 },
  { id: "air", label: "Авиа", icon: Plane, days: [7, 12], rate: 850 },
];

export default function ShippingCalculator() {
  const [weight, setWeight] = useState(500);
  const [volume, setVolume] = useState(2);
  const [mode, setMode] = useState<Mode>("sea");

  const selected = MODES.find((m) => m.id === mode)!;

  const estimate = useMemo(() => {
    const chargeable = Math.max(weight, volume * 167);
    const cost = Math.round((chargeable * selected.rate) / 100) * 100;
    return {
      low: Math.round(cost * 0.9),
      high: Math.round(cost * 1.15),
    };
  }, [weight, volume, selected]);

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
            Калькулятор
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Ориентировочная стоимость доставки
          </h2>
          <p className="mt-5 text-lg text-[#ADADAD]">
            Предварительный расчёт за 10 секунд. Точную смету пришлём после уточнения деталей груза.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#161616] p-8 sm:p-10"
        >
          <div className="flex flex-wrap gap-2.5">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  mode === m.id
                    ? "border-[#00D4A5] bg-[#00D4A5]/10 text-[#00D4A5]"
                    : "border-white/10 text-[#ADADAD] hover:border-white/25 hover:text-white"
                }`}
              >
                <m.icon className="h-4 w-4" />
                {m.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#ADADAD]">
                <span>Вес груза</span>
                <span className="text-white">{weight} кг</span>
              </div>
              <input
                type="range"
                min={10}
                max={5000}
                step={10}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#00D4A5]"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-[#ADADAD]">
                <span>Объём груза</span>
                <span className="text-white">{volume} м³</span>
              </div>
              <input
                type="range"
                min={0.1}
                max={40}
                step={0.1}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-[#00D4A5]"
              />
            </div>
          </div>

          <div className="mt-9 flex flex-col items-center gap-2 rounded-2xl border border-white/[0.06] bg-[#0A0A0A]/60 px-6 py-8 text-center">
            <Calculator className="h-5 w-5 text-[#00D4A5]" />
            <div className="font-display text-3xl font-extrabold text-gradient-accent sm:text-4xl">
              {estimate.low.toLocaleString("ru-RU")} – {estimate.high.toLocaleString("ru-RU")} ₽
            </div>
            <div className="text-sm text-[#ADADAD]">
              срок доставки — {selected.days[0]}–{selected.days[1]} дней
            </div>
          </div>

          <p className="mt-5 text-center text-[11px] leading-relaxed text-[#666666]">
            Расчёт ориентировочный и не включает таможенные платежи и стоимость самого товара.
            Точную смету составим индивидуально по вашему грузу.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
