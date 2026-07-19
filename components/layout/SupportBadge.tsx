"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X, Headset } from "lucide-react";

export default function SupportBadge() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#141414]/95 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D4A5] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D4A5]" />
              </span>
              <span className="text-xs font-semibold text-white">Мы на связи</span>
            </div>
            <p className="mt-2.5 text-xs leading-relaxed text-[#ADADAD]">
              Отвечаем в течение 5 минут в рабочее время. Выберите удобный
              мессенджер:
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-[#E5E5E5] transition-colors hover:border-[#00D4A5]/30 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-[#00D4A5]" />
                WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-xs font-medium text-[#E5E5E5] transition-colors hover:border-[#00D4A5]/30 hover:text-white"
              >
                <Send className="h-3.5 w-3.5 text-[#00D4A5]" />
                Telegram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00D4A5] text-[#0A0A0A] shadow-[0_10px_40px_-8px_rgba(0,212,165,0.7)] transition-shadow duration-300 hover:shadow-[0_10px_50px_-5px_rgba(0,212,165,0.9)]"
        aria-label="Открыть чат поддержки"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Headset className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
