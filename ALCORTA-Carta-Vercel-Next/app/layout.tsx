import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALCORTA | Lomos & Burgers",
  description:
    "Carta online de ALCORTA Lomos & Burgers. Elegí tu pedido y envialo por WhatsApp.",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
