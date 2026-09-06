"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EASE = [0.16, 1, 0.3, 1] as const;

const CASES = [
  {
    type: "Электроника для маркетплейса",
    who: "Селлер, Москва",
    text: "Подбор фабрики под бюджет, инспекция перед отгрузкой, вывод партии на Ozon. Акцент — контроль качества до отправки и прозрачная коммуникация по срокам.",
  },
  {
    type: "Контейнерная поставка без переплат",
    who: "Оптовый клиент, Краснодар",
    text: "Автозапчасти: фиксация сметы до старта, море + авто до склада, документы без сюрпризов по бюджету. Для клиента, который раньше ловил доплаты у посредников.",
  },
  {
    type: "Мебель с отсевом брака на фабрике",
    who: "Интернет-магазин, Санкт-Петербург",
    text: "Видеоинспекция до отгрузки, замена позиций с браком, доставка до склада без повреждений. Сценарий, где важен контроль на производстве, а не «узнаем по факту».",
  },
  {
    type: "Смешанная партия и консолидация",
    who: "Селлер, Самара / Ростов",
    text: "Несколько категорий в одной поставке или сбор груза на складе в Китае. Удобно, когда не нужен отдельный вывоз по каждой позиции и важно собрать всё в один поток.",
  },
];

const REVIEWS = [
  {
    name: "Алексей",
    city: "Москва",
    type: "Поставка электроники для Ozon",
    text: "Весной возили партию беспроводных наушников. Искали фабрику под наш бюджет, сделали инспекцию перед отгрузкой. Срок вышел на 4 дня позже обещанного, но менеджер заранее предупредил и предложил варианты. В итоге товар пришёл в нормальном состоянии, брак минимальный. Будем повторять.",
  },
  {
    name: "Марина",
    city: "Екатеринбург",
    type: "Одежда и текстиль для маркетплейса",
    text: "Работаем с Asia Gate уже третий раз. В этот раз везли детскую одежду. Понравилось, что можно отслеживать этапы и что по таможне всё берут на себя. Цена в итоге совпала с предварительным расчётом — это важно. Единственное, с фотоотчётом по качеству в этот раз немного затянули, но на результат не повлияло.",
  },
  {
    name: "Игорь",
    city: "Краснодар",
    type: "Автозапчасти контейнером",
    text: "Нужно было привезти партию автозапчастей. Раньше работали через других посредников и постоянно ловили сюрпризы по деньгам. Здесь смета была прозрачная, без внезапных доплат. Доставка морем и дальше авто до склада заняла около месяца. Всё пришло, документы в порядке. Пока довольны.",
  },
  {
    name: "Ольга",
    city: "Новосибирск",
    type: "Косметика и уходовая продукция",
    text: "Первый опыт заказа из Китая. Честно, боялась, что будет сложно с сертификацией и таможней. Ребята всё закрыли под ключ. Срок соблюли, товар соответствует образцам. Из минусов — не всегда быстро отвечают в нерабочее время, но в рабочие часы связь нормальная.",
  },
  {
    name: "Дмитрий",
    city: "Санкт-Петербург",
    type: "Мебель и товары для дома",
    text: "Везли партию мебели для своего интернет-магазина. Важно было проверить качество перед отправкой — сделали видеоинспекцию. Несколько позиций пришлось заменить, потому что нашли брак. Это плюс. До склада в Петербурге дошло без повреждений. Будем сотрудничать дальше.",
  },
  {
    name: "Елена",
    city: "Казань",
    type: "Игрушки для сезонной продажи",
    text: "Заказывали партию игрушек к сезону. Сроки поджимали, поэтому выбрали авиа. Вышло дороже, но успели. Менеджер нормально объяснял варианты логистики и не давил на самый дорогой. Товар пришёл, претензий по качеству почти не было.",
  },
  {
    name: "Артём",
    city: "Ростов-на-Дону",
    type: "Строительные материалы",
    text: "Нужно было привезти партию крепежа и расходников. Объём немаленький. Понравилось, что можно консолидировать груз на их складе в Китае. По срокам уложились. Единственный момент — немного задержали отправку документов, но в итоге всё решилось.",
  },
  {
    name: "Светлана",
    city: "Воронеж",
    type: "Электроника небольшими партиями",
    text: "Работаю с небольшими объёмами для своего магазина. Раньше искала поставщиков сама — долго и нервно. Здесь просто оставляешь задачу и получаешь варианты. По двум поставкам уже прошли без серьёзных замечаний. Удобно, что не нужно погружаться во все тонкости таможни.",
  },
  {
    name: "Павел",
    city: "Уфа",
    type: "Упаковка и расходники",
    text: "Везли крафт-пакеты и упаковочные материалы. Казалось бы, простая категория, но важно было попасть в срок. Всё пришло в оговорённые даты. Цена адекватная. Пока нареканий нет, планирую следующий заказ.",
  },
  {
    name: "Наталья",
    city: "Самара",
    type: "Смешанная партия для маркетплейсов",
    text: "Заказывали сразу несколько категорий: часть электроники, часть товаров для дома. Удобно, что можно собрать разные позиции в одну поставку. По качеству в целом нормально, один артикул оказался с расхождением, но вопрос решили через возврат части суммы. Для нас это рабочая схема.",
  },
];

export default function CasesReviews() {
  return (
    <section className="relative bg-[#0A0A0A] py-20 lg:py-28">
      <div className="container">
        {/* A. Шапка секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-[#00D4A5]">
            Кейсы и отзывы
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-bold text-white sm:text-5xl">
            Реальные поставки и отзывы клиентов
          </h2>
          <p className="mt-5 text-lg text-[#ADADAD]">
            Коротко о типах задач, которые закрываем, и живые отзывы клиентов. Без
            маркетинговых обещаний — только рабочая практика.
          </p>
        </motion.div>

        {/* B. 4 кейса */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CASES.map((c, i) => (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group rounded-2xl border border-white/[0.06] bg-[#161616] p-8 transition-all duration-500 hover:border-[#00D4A5]/25"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-[#00D4A5]">
                {c.who}
              </span>
              <h3 className="mt-2.5 font-display text-lg font-semibold text-white">
                {c.type}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#ADADAD]">{c.text}</p>
            </motion.div>
          ))}
        </div>

        {/* C. Отзывы клиентов */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold text-white sm:text-3xl"
          >
            Отзывы клиентов
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 -mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory [scrollbar-width:thin] sm:mx-0 sm:px-0"
          >
            {REVIEWS.map((r) => (
              <div
                key={r.name + r.city}
                className="flex w-[300px] shrink-0 snap-start flex-col rounded-2xl border border-white/[0.06] bg-[#161616] p-7 sm:w-[340px]"
              >
                <Badge variant="outline" className="w-fit">
                  {r.type}
                </Badge>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#ADADAD]">
                  {r.text}
                </p>
                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <span className="font-display text-sm font-semibold text-white">
                    {r.name}
                  </span>
                  <span className="text-sm text-[#666666]">, {r.city}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* D. Низ секции */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/services#process"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D4A5] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_30px_-5px_rgba(0,212,165,0.6)] sm:w-auto"
          >
            Смотреть этапы работы
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services#guarantees"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] sm:w-auto"
          >
            Гарантии по сделке
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
