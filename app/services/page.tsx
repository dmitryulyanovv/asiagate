import type { Metadata } from "next";
import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RouteSection from "@/components/sections/RouteSection";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ShippingCalculator from "@/components/sections/ShippingCalculator";
import ServicesGuarantees from "@/components/sections/ServicesGuarantees";
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
      <RouteSection />
      <ShippingCalculator />
      <ServicesGuarantees />
      <ServicesShowcase />
      <ComparisonTable />
      <HowItWorks />
      <ServicesFAQ />
      <CtaBanner />
    </>
  );
}
