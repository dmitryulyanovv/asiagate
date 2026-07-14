import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesFAQ from "@/components/sections/ServicesFAQ";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Полный цикл логистики и торговли: поиск поставщиков, закупка, контроль качества, складская консолидация, международная доставка и таможенное оформление.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesShowcase />
      <HowItWorks />
      <ServicesFAQ />
      <CtaBanner />
    </>
  );
}
