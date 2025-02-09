"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { store } from "../store";

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
        className={`${inter.className} antialiased`}
      >
        <Provider store={store}>
          {pathname !== "/order" && <Header/>}
          {children}
          {pathname !== "/order" && <Footer/>}
        </Provider>
      </body>
    </html>
  );
}
