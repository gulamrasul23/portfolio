import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisScroller } from "@/components/LenisScroller";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Gulam Rasul",
  description: "Personal portfolio of a Frontend Web Developer showcasing modern web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LenisScroller />
          {/* A soft gradient background behind everything to enhance glass effect */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-[#0b0f19] dark:to-indigo-950 opacity-100 transition-colors duration-500" />

          <Navbar />
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
