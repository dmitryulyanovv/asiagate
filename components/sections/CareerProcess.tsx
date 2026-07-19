"use client";

import { motion } from "framer-motion";
import { FileEdit, PhoneCall, GraduationCap, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: FileEdit,
    title: "Заявка",
    time: "2 минуты",
    description: "Заполните короткую форму — имя, телефон и удобное время звонка.",
  },
  {
    icon: PhoneCall,
    title: "Созвон с HR",
    time: "15 минут",
    description: "Расскажем о задачах, ответим на вопросы, обсудим график.",
  },
  {
    icon: GraduationCap,
    title: "Обучение",
    time: "1–2 дня",
    description: "Онлайн-курс и наставник введут вас в курс дела с нуля.",
  },
  {
    icon: Rocket,
    title: "Старт работы",
    time: "сразу после обучения",
    description: "Первые чаты с клиентами и первые выплаты уже на этой неделе.",
  },
];

export default function CareerProcess() {
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
            Путь до первой смены
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            От заявки до дохода — за пару дней
          </h2>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#00D4A5]/30 bg-[#0A0A0A] text-[#00D4A5]">
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {step.title}
              </h3>
              <span className="mt-1 text-xs font-medium text-[#00D4A5]">{step.time}</span>
              <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-[#ADADAD]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
