import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Fermor — Your money, in context.", description: "A product-design exploration for Fermor." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }