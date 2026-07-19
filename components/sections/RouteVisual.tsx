"use client";

import { motion } from "framer-motion";
import { Factory, Ship, FileCheck2, Warehouse } from "lucide-react";

const STOPS = [
  { x: 40, y: 170, label: "Гуанчжоу", sub: "Фабрика", icon: Factory },
  { x: 350, y: 60, label: "Шанхай", sub: "Порт отгрузки", icon: Ship },
  { x: 660, y: 220, label: "Владивосток", sub: "Таможня", icon: FileCheck2 },
  { x: 960, y: 90, label: "Москва", sub: "Склад", icon: Warehouse },
];

const LEGS = [
  { label: "3–5 дней", atX: 195, atY: 90 },
  { label: "10–18 дней", atX: 505, atY: 110 },
  { label: "4–7 дней", atX: 810, atY: 130 },
];

const PATH = "M40,170 C160,90 220,60 350,60 C470,60 560,180 660,220 C760,260 850,140 960,90";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function RouteVisual() {
  return (
    <div className="relative aspect-[1000/300] w-full">
      <svg
        viewBox="0 0 1000 300"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="routeLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D4A5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00D4A5" stopOpacity="1" />
          </linearGradient>
        </defs>

        <path d={PATH} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="2 8" strokeLinecap="round" />

        <motion.path
          d={PATH}
          fill="none"
          stroke="url(#routeLine)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.4, ease: EASE, delay: 0.2 }}
        />

        <motion.circle
          r="5"
          fill="#00F5C4"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          whileInView={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.4, ease: "linear" }}
          style={{ offsetPath: `path("${PATH}")` } as React.CSSProperties}
        />

        {STOPS.map((s, i) => (
          <motion.circle
            key={s.label}
            cx={s.x}
            cy={s.y}
            r="6"
            fill="#0A0A0A"
            stroke="#00D4A5"
            strokeWidth="2.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.4, ease: EASE }}
          />
        ))}
      </svg>

      {LEGS.map((l, i) => (
        <motion.div
          key={l.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 + i * 0.4 }}
          className="absolute hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0A0A0A]/80 px-3 py-1 text-[11px] font-medium text-[#ADADAD] backdrop-blur-sm sm:block"
          style={{ left: `${(l.atX / 1000) * 100}%`, top: `${(l.atY / 300) * 100}%` }}
        >
          {l.label}
        </motion.div>
      ))}

      {STOPS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 + i * 0.4, ease: EASE }}
          className="absolute w-max max-w-[8rem] -translate-x-1/2 text-center sm:max-w-[9rem]"
          style={{
            left: `${(s.x / 1000) * 100}%`,
            top: `${(s.y / 300) * 100}%`,
            transform: `translate(-50%, ${s.y < 130 ? "-135%" : "18px"})`,
          }}
        >
          <div className="mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D4A5]/10 text-[#00D4A5]">
            <s.icon className="h-4 w-4" />
          </div>
          <div className="font-display text-sm font-semibold text-white">{s.label}</div>
          <div className="text-xs text-[#ADADAD]">{s.sub}</div>
        </motion.div>
      ))}
    </div>
  );
}
