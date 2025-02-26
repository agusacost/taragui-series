import { Geist, Geist_Mono, Akshar, Inter } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const akshar = Akshar({
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
