"use client"

import { Inter } from "next/font/google";
import "../globals.css";

import HeaderAdmin from "../components/header/HeaderAdmin";
import Sider from "../components/Sider/Sider";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased body`}
      >
        {!pathname.startsWith("/admin/auth/login") && <Sider />}
        <div className="main">
        {!pathname.startsWith("/admin/auth/login") && <HeaderAdmin />}
          <div className="block-main">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
