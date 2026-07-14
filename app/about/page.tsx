import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import Stats from "@/components/sections/Stats";
import AboutFacilities from "@/components/sections/AboutFacilities";
import AboutValues from "@/components/sections/AboutValues";
import AboutTimeline from "@/components/sections/AboutTimeline";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Asia Gate — логистическая и торговая компания полного цикла. Собственные склады в Китае, штат байеров и 8500+ выполненных поставок в Россию.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <Stats />
      <AboutFacilities />
      <AboutValues />
      <AboutTimeline />
      <CtaBanner />
    </>
  );
}
