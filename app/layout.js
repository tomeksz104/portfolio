import { Inter } from "next/font/google";

import PreLoader from "@/components/PreLoader";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import LineWrap from "@/components/LineWrap/LineWrap";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

import "@/public/css/preloader.css";

export const metadata = {
  title: "Tomasz Szamocki",
  description:
    "An overview of Tomasz Szamocki's FRONTEND projects and achievements.",
};

export default function RootLayout({ children }) {
  return (
    <html className="relative min-h-full" lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <PreLoader />
        <AppHeader />
        <LineWrap />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
