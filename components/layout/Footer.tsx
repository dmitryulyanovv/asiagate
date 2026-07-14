import Link from "next/link";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const COLUMNS = [
  {
    title: "Компания",
    links: [
      { href: "/about", label: "О компании" },
      { href: "/services", label: "Услуги" },
      { href: "/career", label: "Карьера" },
      { href: "/contacts", label: "Контакты" },
    ],
  },
  {
    title: "Услуги",
    links: [
      { href: "/services", label: "Закупка товаров" },
      { href: "/services", label: "Карго-доставка" },
      { href: "/services", label: "Таможенное оформление" },
      { href: "/services", label: "Контроль качества" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D4A5]/40 to-transparent" />
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4A5] to-[#00A67D] font-display text-base font-extrabold text-[#0A0A0A]">
                AG
              </span>
              <span className="font-display text-lg font-bold text-white">
                Asia Gate
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#A3A3A3]">
              Прямые поставки товаров из Китая в Россию. Закупка, контроль
              качества, логистика и таможня — полный цикл в одних руках.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["TG", "WA", "VK"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-[#E5E5E5] transition-all duration-300 hover:border-[#00D4A5]/50 hover:text-[#00D4A5]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A3A3A3] transition-colors duration-200 hover:text-[#00D4A5]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold text-white">
              Контакты
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                <a href="tel:+78001234567" className="text-sm text-[#E5E5E5] hover:text-white">
                  8 800 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                <a href="mailto:info@asiagate.ru" className="text-sm text-[#E5E5E5] hover:text-white">
                  info@asiagate.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                <span className="text-sm text-[#A3A3A3]">
                  Москва, Пресненская наб., 12
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Send className="mt-0.5 h-4 w-4 shrink-0 text-[#00D4A5]" />
                <a href="#" className="text-sm text-[#E5E5E5] hover:text-white">
                  Написать в Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Asia Gate. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#666666] hover:text-[#A3A3A3]">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-[#666666] hover:text-[#A3A3A3]">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
