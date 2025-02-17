"use client"

import { Inter } from "next/font/google";
import "../globals.css";

import HeaderAdmin from "../components/header/HeaderAdmin";
import Sider from "../components/Sider/Sider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased body`}
      >
        <Sider />
        <div className="main">
          <HeaderAdmin />
          <div className="block-main">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
