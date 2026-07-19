"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success";

const CONTACT_INFO = [
  { icon: Phone, title: "Телефон", value: "+7 495 268-02-02", href: "tel:+74952680202" },
  { icon: Mail, title: "Email", value: "info@asiagate.ru", href: "mailto:info@asiagate.ru" },
  { icon: MessageCircle, title: "WhatsApp", value: "Написать в WhatsApp", href: "#" },
  { icon: Send, title: "Telegram", value: "Написать в Telegram", href: "#" },
  { icon: MapPin, title: "Офис", value: "Краснопресненская наб., 12, Москва", href: undefined },
  { icon: Clock, title: "Режим работы", value: "Пн–Пт, 9:00–19:00 (МСК)", href: undefined },
];

export default function ContactMain() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <section className="relative bg-[#0A0A0A] py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {CONTACT_INFO.map((c) => {
              const Comp = c.href ? "a" : "div";
              return (
                <Comp
                  key={c.title}
                  href={c.href}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-[#161616] p-6 transition-all duration-300 hover:border-[#00D4A5]/25"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00D4A5]/10 text-[#00D4A5] transition-transform duration-300 group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-[#ADADAD]">{c.title}</p>
                    <p className="mt-1 text-base font-medium text-white">{c.value}</p>
                  </div>
                </Comp>
              );
            })}

            <div className="relative mt-2 flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#161616]">
              <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <MapPin className="h-6 w-6 text-[#00D4A5]" />
                <span className="text-sm text-[#ADADAD]">
                  Краснопресненская наб., 12, Москва
                </span>
                <span className="text-xs text-[#666666]">55.754203, 37.556388</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-white/[0.08] bg-[#161616] p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00D4A5]/15 text-[#00D4A5]"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    Сообщение отправлено
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-[#ADADAD]">
                    Мы ответим вам в ближайшее рабочее время.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <h2 className="font-display text-2xl font-bold text-white">
                    Напишите нам
                  </h2>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#ADADAD]">Имя</label>
                      <Input required name="name" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium text-[#ADADAD]">Телефон</label>
                      <Input required type="tel" name="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#ADADAD]">Email</label>
                    <Input type="email" name="email" placeholder="you@company.ru" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#ADADAD]">Сообщение</label>
                    <Textarea
                      required
                      name="message"
                      placeholder="Расскажите, какой товар и в каком объёме хотите заказать"
                      rows={5}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_40px_-5px_rgba(0,212,165,0.7)] disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
