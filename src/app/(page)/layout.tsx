"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { store } from "../store";
import { createContext, useEffect, useState } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

interface Setting {
  websiteName: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  copyright: string;
  facebook: string;
  twitter: string;
  youtube: string;
  instagram: string;
  policy1: string;
  policy2: string;
  policy3: string;
  policy4: string;
  policy5: string;
  policy6: string;
  support1: string;
  support2: string;
  support3: string;
  support4: string;
  support5: string;
  support6: string;
}

export const SettingContext = createContext<Setting | undefined>(undefined);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [setting, setSetting] = useState({
    websiteName: '',
    logo: '',
    phone: '',
    email: '',
    address: '',
    copyright: '',
    facebook: '',
    twitter: '',
    youtube: '',
    instagram: '',
    policy1: '',
    policy2: '',
    policy3: '',
    policy4: '',
    policy5: '',
    policy6: '',
    support1: '',
    support2: '',
    support3: '',
    support4: '',
    support5: '',
    support6: ''
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await fetch('https://freshskinweb.onrender.com/setting/show');
      const data = await response.json();
      setSetting(data.data[0]);
    };

    fetchSettings();
  }, []);

  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <SettingContext.Provider
          value={ {
              websiteName: setting.websiteName,
              logo: setting.logo,
              phone: setting.phone,
              email: setting.email,
              address: setting.address,
              copyright: setting.copyright,
              facebook: setting.facebook,
              twitter: setting.twitter,
              youtube: setting.youtube,
              instagram: setting.instagram,
              policy1: setting.policy1,
              policy2: setting.policy2,
              policy3: setting.policy3,
              policy4: setting.policy4,
              policy5: setting.policy5,
              policy6: setting.policy6,
              support1: setting.support1,
              support2: setting.support2,
              support3: setting.support3,
              support4: setting.support4,
              support5: setting.support5,
              support6: setting.support6
          }}
        >
          <Provider store={store}>
            {!pathname.startsWith("/order") && <Header />}
            {children}
            {!pathname.startsWith("/order") && <Footer />}
          </Provider>
        </SettingContext.Provider>
      </body>
    </html>
  );
}
