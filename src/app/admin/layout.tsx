"use client";

import { Inter } from "next/font/google";
import "../globals.css";
import Cookies from "js-cookie";

import HeaderAdmin from "../components/header/HeaderAdmin";
import Sider from "../components/Sider/Sider";
import { usePathname } from "next/navigation";
import { useEffect, useState, createContext } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

interface Profile {
  address: string;
  avatar: string;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  roleTitle: string;
  permissions: string[];
}

export const ProfileAdminContext = createContext<Profile | undefined>(undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const [info, setInfo] = useState({
    address: "",
    avatar: "",
    createdAt: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: {
      title: "",
      permission: [],
    },
  });

  useEffect(() => {
    if (!pathname.startsWith("/admin/auth/login")) {
      const fetchProfile = async () => {
        const token = Cookies.get("token");

        if (token) {
          const response = await fetch(
            "https://freshskinweb.onrender.com/auth/getUser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: token,
              }),
            }
          );

          const data = await response.json();
          setInfo(data.data);
        }
        else{
          location.href = "/admin/auth/login"
        }

      };

      fetchProfile();
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased body`}>
        <ProfileAdminContext.Provider
          value={{
            address: info?.address,
            avatar: info?.avatar,
            createdAt: info?.createdAt,
            email: info?.email,
            firstName: info?.firstName,
            lastName: info?.lastName,
            phone: info?.phone,
            roleTitle: info?.role.title,
            permissions: info?.role.permission,
          }}
        >
          {!pathname.startsWith("/admin/auth/login") && <Sider />}
          <div className="main">
            {!pathname.startsWith("/admin/auth/login") && <HeaderAdmin />}
            <div className="block-main">{children}</div>
          </div>
        </ProfileAdminContext.Provider>
      </body>
    </html>
  );
}
