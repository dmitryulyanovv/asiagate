# Asia Gate — сайт логистической компании

Премиальный сайт на Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Запуск проекта

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Сборка для продакшена

```bash
npm run build
npm run start
```

## Структура

- `app/` — страницы (App Router): главная, /about, /services, /career, /contacts
- `components/layout/` — Header, Footer
- `components/sections/` — секции страниц
- `components/ui/` — переиспользуемые UI-примитивы (shadcn/ui style)
- `lib/utils.ts` — вспомогательные функции

## Что нужно донастроить перед продакшеном

1. Заменить телефон/email/адрес на реальные (Header, Footer, ContactMain)
2. Подключить реальную отправку форм (ApplyForm, ContactMain) — сейчас имитация с setTimeout
3. Заменить домен `asiagate.ru` в `layout.tsx`, `robots.ts`, `sitemap.ts` на реальный
4. Добавить `public/og-image.jpg` (1200x630) для соцсетей
5. Подключить карту (Yandex Maps / Google Maps) в ContactMain вместо плейсхолдера
