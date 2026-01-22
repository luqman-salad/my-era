import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle"; // Import the toggle

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luqman | High-Fidelity Engineer",
  description: "Specialized in AI-driven systems and production-ready applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is necessary for next-themes
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* This places the toggle globally */}
          <ThemeToggle /> 
        </ThemeProvider>
      </body>
    </html>
  );
}