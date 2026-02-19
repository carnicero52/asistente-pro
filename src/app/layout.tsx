import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asistente Pro - Tu asistente virtual con IA",
  description: "Un asistente virtual que nunca descansa. Responde automáticamente a tus clientes, agenda citas y toma pedidos las 24 horas.",
  keywords: ["asistente virtual", "chatbot", "IA", "atención al cliente", "automatización", "agenda citas"],
  authors: [{ name: "Asistente Pro" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Asistente Pro - Tu asistente virtual con IA",
    description: "Un asistente virtual que nunca descansa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
