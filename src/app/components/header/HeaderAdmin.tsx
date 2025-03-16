import { useEffect, useState, useContext } from "react";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cookies from "js-cookie";
import Link from "next/link";
import { ProfileAdminContext } from "@/app/admin/layout";

export default function HeaderAdmin() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const dataProfile = useContext(ProfileAdminContext);
  let pingInterval: NodeJS.Timeout | null = null; // Giữ kết nối sống

  useEffect(() => {
    const connectWebSocket = () => {
      const Socket = new WebSocket("wss://freshskinweb.onrender.com/ws/notify");

      Socket.onopen = () => {
        console.log("✅ WebSocket đã kết nối!");
        setSocket(Socket);

        // Gửi ping mỗi 30 giây để giữ kết nối sống
        pingInterval = setInterval(() => {
          if (Socket.readyState === WebSocket.OPEN) {
            console.log("📡 Gửi ping...");
            Socket.send("ping");
          }
        }, 30000);
      };

      Socket.onmessage = (event) => {
        console.log("📩 Nhận thông báo từ BE:", event.data);
        setHasNewNotification(true);
      };

      Socket.onclose = () => {
        console.log("❌ WebSocket bị mất kết nối, thử lại sau 3 giây...");
        setTimeout(connectWebSocket, 3000);
      };

      Socket.onerror = (error) => {
        console.error("⚠️ Lỗi WebSocket:", error);
      };
    };

    connectWebSocket(); // Khởi tạo WebSocket lần đầu

    return () => {
      console.log("🔌 Đóng kết nối WebSocket!");
      if (socket) socket.close();
      if (pingInterval) clearInterval(pingInterval);
    };
  }, []); // Chỉ chạy một lần khi component mount

  const handleClickLogout = async () => {
    Cookies.remove("token");
    location.href = "/admin/auth/login";
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 w-full">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <IoSearch className="absolute left-3 top-3 text-gray-500" size={18} />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell
            className={`text-gray-600 text-[20px] cursor-pointer hover:text-green-400 ${
              hasNewNotification ? "animate-bounce text-red-500" : ""
            }`}
          />
          {hasNewNotification && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          )}
        </div>

        {dataProfile?.avatar && (
          <Link href="/admin/profile" className="w-[40px] aspect-square">
            <img
              src={dataProfile.avatar}
              className="w-full h-full object-cover rounded-full"
              alt="Avatar"
            />
          </Link>
        )}

        <span onClick={handleClickLogout} className="cursor-pointer">
          <FaArrowRightFromBracket className="text-[#6D7587] text-[20px] hover:text-red-500" />
        </span>
      </div>
    </div>
  );
}
