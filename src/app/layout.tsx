import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greenhouse Film - Premium Greenhouse Covering Solutions",
  description: "High-quality greenhouse film solutions for optimal plant growth and protection. Choose from our range of durable, UV-resistant, and energy-efficient films.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Chatbot />
      </body>
    </html>
  );
}
