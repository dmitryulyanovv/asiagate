import type { Metadata } from "next";
import ContactsHero from "@/components/sections/ContactsHero";
import ContactMain from "@/components/sections/ContactMain";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с Asia Gate: телефон, email, адрес офиса в Москве. Рассчитаем стоимость доставки товаров из Китая в течение 30 минут.",
};

export default function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <ContactMain />
    </>
  );
}
