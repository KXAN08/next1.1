"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="uz">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {!isLoginPage && <Navbar />}
        <main className="flex-grow">{children}</main>
        {!isLoginPage && <Footer />}
      </body>
    </html>
  );
}
