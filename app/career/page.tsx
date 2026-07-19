import type { Metadata } from "next";
import CareerHero from "@/components/sections/CareerHero";
import VacancyCard from "@/components/sections/VacancyCard";
import CareerHighlights from "@/components/sections/CareerHighlights";
import CareerGallery from "@/components/sections/CareerGallery";
import CareerProcess from "@/components/sections/CareerProcess";
import CareerFAQ from "@/components/sections/CareerFAQ";
import ApplyForm from "@/components/sections/ApplyForm";

export const metadata: Metadata = {
  title: "Карьера — вакансия «Оператор чата поддержки» (удалённо)",
  description:
    "Ищем оператора чата поддержки на удалённую работу. Зарплата от 55 000 до 90 000 ₽ + премии (от 370 ₽/час), гибкий график от 2 часов, оформление по ГПХ (НПД). Обучаем с нуля.",
};

const JOB_POSTINGS = [
  {
    title: "Оператор чата поддержки",
    description:
      "Консультация клиентов Asia Gate в чатах (Telegram, WhatsApp), ответы на вопросы по заказам и доставке, фиксация заявок.",
    employmentType: "CONTRACTOR",
    minSalary: 55000,
    maxSalary: 90000,
    remote: true,
  },
];

export default function CareerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            JOB_POSTINGS.map((job) => ({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: job.title,
              description: job.description,
              hiringOrganization: {
                "@type": "Organization",
                name: "Asia Gate",
              },
              employmentType: job.employmentType,
              jobLocationType: job.remote ? "TELECOMMUTE" : undefined,
              applicantLocationRequirements: job.remote
                ? { "@type": "Country", name: "Russia" }
                : undefined,
              jobLocation: !job.remote
                ? {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Москва",
                      addressCountry: "RU",
                    },
                  }
                : undefined,
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "RUB",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: job.minSalary,
                  maxValue: job.maxSalary,
                  unitText: "MONTH",
                },
              },
            }))
          ),
        }}
      />
      <CareerHero />
      <VacancyCard />
      <CareerHighlights />
      <CareerGallery />
      <CareerProcess />
      <CareerFAQ />
      <ApplyForm />
    </>
  );
}
