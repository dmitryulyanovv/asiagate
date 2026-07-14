"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, User, Phone, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success";

const SLOTS = ["Утро (9:00–12:00)", "День (12:00–17:00)", "Вечер (17:00–21:00)"];

export default function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [slot, setSlot] = useState(SLOTS[0]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Имитация отправки — подключите реальный API-роут при интеграции
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  return (
    <section id="apply" className="relative overflow-hidden bg-[#0A0A0A] py-20 lg:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#00D4A5]/[0.08] blur-[140px]"
      />
      <div className="container relative">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
              Отклик на вакансию
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
              Оставьте заявку —
              <br />
              мы перезвоним сегодня
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#A3A3A3]">
              HR-менеджер свяжется с вами в течение рабочего дня, расскажет о
              задачах и договорится об удобном времени обучения.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Без резюме и собеседований в офисе",
                "Ответ в день заявки",
                "Первая смена уже в течение недели",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-[#E5E5E5]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00D4A5]" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl border border-white/[0.08] bg-[#161616] p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-10 text-center"
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
                    Заявка отправлена!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-[#A3A3A3]">
                    Мы свяжемся с вами в ближайшее рабочее время по указанному
                    номеру телефона.
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
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A3A3A3]">
                      <User className="h-3.5 w-3.5" /> Как к вам обращаться
                    </label>
                    <Input required name="name" placeholder="Ваше имя" />
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A3A3A3]">
                      <Phone className="h-3.5 w-3.5" /> Телефон
                    </label>
                    <Input
                      required
                      type="tel"
                      name="phone"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-[#A3A3A3]">
                      Удобное время для звонка
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SLOTS.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setSlot(s)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                            slot === s
                              ? "border-[#00D4A5] bg-[#00D4A5]/10 text-[#00D4A5]"
                              : "border-white/10 text-[#A3A3A3] hover:border-white/25"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-xs font-medium text-[#A3A3A3]">
                      <MessageSquare className="h-3.5 w-3.5" /> Комментарий (необязательно)
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Расскажите немного о себе — это ускорит рассмотрение заявки"
                      rows={3}
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
                        Отправить заявку
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] leading-relaxed text-[#666666]">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки
                    персональных данных
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
