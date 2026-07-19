import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asia Gate — прямые поставки из Китая",
    short_name: "Asia Gate",
    description:
      "Логистика и торговля полного цикла: закупка, контроль качества, доставка «под ключ» из Китая в Россию.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
