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

export default function CareerPage() {
  return (
    <>
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
