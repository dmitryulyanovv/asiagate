"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "asiagate-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(STORAGE_KEY);
      if (!consent) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:left-4 sm:max-w-md"
        >
          <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#141414]/95 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00D4A5]/10 text-[#00D4A5]">
              <Cookie className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-xs leading-relaxed text-[#ADADAD]">
                Мы используем cookies, чтобы сайт работал корректно и был
                удобнее. Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
                <a href="/privacy-policy" className="text-[#E5E5E5] underline decoration-white/20 underline-offset-2 hover:text-white">
                  Политикой конфиденциальности
                </a>
                .
              </p>
              <div className="mt-3 flex gap-2.5">
                <button
                  onClick={accept}
                  className="rounded-full bg-[#00D4A5] px-4 py-2 text-xs font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4]"
                >
                  Принять
                </button>
                <a
                  href="/privacy-policy"
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-[#ADADAD] transition-colors hover:text-white"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
