import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nittlaser.com.br"),
  title: "NittLaser — Gravação a Laser Personalizada | Canetas, Copos, Facas e Mais",
  description:
    "Gravação a laser personalizada de alta precisão. Canetas, copos Stanley, facas, garrafas, madeira e pingentes. Presentes únicos com entrega para todo o Brasil.",
  authors: [{ name: "NittLaser" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "NittLaser — Gravação a Laser Personalizada",
    description:
      "Transforme objetos em peças únicas com gravação a laser de alta precisão.",
    type: "website",
    url: "https://nittlaser.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
