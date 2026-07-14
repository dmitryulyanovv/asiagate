import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import LogosMarquee from "@/components/sections/LogosMarquee";
import CompanyOverview from "@/components/sections/CompanyOverview";
import HowItWorks from "@/components/sections/HowItWorks";
import Stats from "@/components/sections/Stats";
import Advantages from "@/components/sections/Advantages";
import Categories from "@/components/sections/Categories";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Asia Gate — прямые поставки товаров из Китая в Россию",
  description:
    "Полный цикл логистики и торговли: закупка на фабриках Китая, контроль качества, таможня, доставка «под ключ». Работаем с бизнесом любого масштаба.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <CompanyOverview />
      <HowItWorks />
      <Stats />
      <Advantages />
      <Categories />
      <CtaBanner />
    </>
  );
}
