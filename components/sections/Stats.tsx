"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const STATS = [
  { value: 1200, suffix: "+", label: "Фабрик-партнёров в Китае" },
  { value: 8500, suffix: "+", label: "Выполненных поставок" },
  { value: 98, suffix: "%", label: "Грузов доставлены в срок" },
  { value: 12, suffix: " дней", label: "Средний срок доставки" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString("ru-RU") + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4A5]/[0.06] blur-[120px]" />
      <div className="container relative">
        <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/[0.06] bg-[#0F0F0F] p-8 sm:p-12 lg:grid-cols-4 lg:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="font-display text-4xl font-extrabold text-gradient-accent sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-[#A3A3A3]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
