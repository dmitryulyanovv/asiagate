const ITEMS = [
  "Электроника",
  "Одежда и текстиль",
  "Автозапчасти",
  "Мебель и интерьер",
  "Строительные материалы",
  "Оборудование",
  "Косметика",
  "Игрушки",
  "Товары для дома",
  "Упаковка",
];

export default function LogosMarquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section className="relative border-y border-white/[0.06] bg-[#0A0A0A] py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent sm:w-40" />

      <div className="flex overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12">
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold text-[#404040] transition-colors duration-300 hover:text-[#00D4A5]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
