import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-[#0A0A0A] pt-28 pb-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00D4A5]/[0.12] blur-[140px]" />

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="font-display text-8xl font-extrabold text-gradient-accent sm:text-9xl">
            404
          </span>
          <h1 className="mt-6 text-balance font-display text-2xl font-bold text-white sm:text-3xl">
            Страница не найдена
          </h1>
          <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-[#ADADAD]">
            Возможно, ссылка устарела или страница была перемещена. Вернитесь
            на главную или посмотрите наши услуги.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-8 py-4 text-base font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_40px_-5px_rgba(0,212,165,0.7)] sm:w-auto"
            >
              <Home className="h-4 w-4" />
              На главную
            </Link>
            <Link
              href="/services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
            >
              Наши услуги
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
