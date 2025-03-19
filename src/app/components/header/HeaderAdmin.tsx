import { useEffect, useState, useContext, useRef } from "react";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Cookies from "js-cookie";
import Link from "next/link";
import { ProfileAdminContext } from "@/app/admin/layout";
import { Trash2 } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";

dayjs.extend(relativeTime);
dayjs.locale("vi");

interface Notification {
  id: number;
  message: string;
  time: string;
  isRead: boolean;
  image: string;
}

export default function HeaderAdmin() {
  const [unreadCount, setUnreadCount] = useState<number>(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dataProfile = useContext(ProfileAdminContext);
  const wsRef = useRef<WebSocket | null>(null);

  // 🚀 Fetch danh sách thông báo từ API
  const fetchNotifications = async () => {
    try {
      const res = await fetch(
        "https://freshskinweb.onrender.com/admin/notify/review"
      );
      const data: Notification[] = await res.json();
      // Lọc bỏ thông báo không hợp lệ nếu cần
      const validNotifications = data.filter(
        (n: Notification) => n.id && n.message
      );
      setNotifications(validNotifications);
      setUnreadCount(
        validNotifications.filter((n: Notification) => !n.isRead).length
      );
    } catch (error) {
      console.error("❌ Lỗi khi fetch thông báo:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  useEffect(() => {
    function connectWebSocket() {
      if (wsRef.current) return;

      const ws = new WebSocket("wss://freshskinweb.onrender.com/ws/notify");

      ws.onopen = () => {
        console.log("✅ WebSocket đã kết nối!");
        wsRef.current = ws;
      };

      ws.onmessage = (event) => {
        console.log("📩 Nhận thông báo:", event.data);
        try {
          const data: Notification = JSON.parse(event.data);
          if (!data.id || !data.message) return;
          setNotifications((prev: Notification[]) => [data, ...prev]);
          setUnreadCount((prev: number) => prev + 1);
        } catch (error) {
          console.error("❌ Lỗi xử lý WebSocket:", error);
        }
      };

      ws.onclose = () => {
        console.log("❌ WebSocket mất kết nối, thử lại sau 5 giây...");
        wsRef.current = null;
        setTimeout(connectWebSocket, 5000);
      };
    }

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, []);

  const handleClickLogout = () => {
    Cookies.remove("token");
    location.href = "/admin/auth/login";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const markAsRead = async (id?: number) => {
    if (!id) {
      console.error("❌ Lỗi: ID thông báo bị thiếu!");
      return;
    }

    try {
      await fetch(
        `https://freshskinweb.onrender.com/admin/notify/update/${id}`,
        { method: "GET" }
      );

      setNotifications((prev: Notification[]) =>
        prev.map((n: Notification) =>
          n.id === id ? { ...n, isRead: true } : n
        )
      );
      setUnreadCount((prev: number) => Math.max(prev - 1, 0));
    } catch (error) {
      console.error("❌ Lỗi cập nhật trạng thái đã đọc:", error);
    }
  };

  const removeNotification = async (id?: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!id) {
      console.error("❌ Lỗi: ID thông báo bị thiếu!");
      return;
    }

    try {
      const response = await fetch(
        `https://freshskinweb.onrender.com/admin/notify/review/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setNotifications((prev: Notification[]) =>
          prev.filter((n: Notification) => n.id !== id)
        );
      } else {
        console.error(`❌ Lỗi xóa thông báo ID ${id}:`, response.statusText);
      }
    } catch (error) {
      console.error("❌ Lỗi khi xóa thông báo:", error);
    }
  };

  const clearAllNotifications = async () => {
    try {
      const response = await fetch(
        "https://freshskinweb.onrender.com/admin/notify/review/deleteAll",
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setNotifications([]);
        setUnreadCount(0);
      } else {
        console.error("❌ Lỗi xóa tất cả thông báo:", response.statusText);
      }
    } catch (error) {
      console.error("❌ Lỗi khi xóa tất cả thông báo:", error);
    }
  };

  const formatRelativeTime = (timestamp: string): string => {
    const time = dayjs(timestamp);
    const now = dayjs();

    if (now.diff(time, "minute") < 1) return "Vừa xong";
    if (now.diff(time, "hour") < 1)
      return `${now.diff(time, "minute")} phút trước`;
    if (now.diff(time, "day") < 1) return `${now.diff(time, "hour")} giờ trước`;
    if (now.diff(time, "day") === 1) return "Hôm qua";

    return time.format("DD/MM/YYYY");
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
        {/* 🔔 Chuông thông báo */}
        <div className="relative">
          <FaBell
            className={`text-gray-600 text-[20px] cursor-pointer hover:text-green-400 ${
              unreadCount > 0 ? "animate-bounce text-red-500" : ""
            }`}
            onClick={toggleDropdown}
          />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </div>

        {/* 📩 Dropdown thông báo */}
        {isDropdownOpen && (
          <div className="absolute right-5 top-14 w-96 bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 z-50">
            <div className="px-4 py-2 flex justify-between items-center bg-gray-100">
              <span className="font-semibold">Thông báo</span>
              {notifications.length > 0 && (
                <button
                  onClick={clearAllNotifications}
                  className="text-red-500 text-sm hover:underline"
                >
                  Xóa tất cả
                </button>
              )}
            </div>
            {notifications.length === 0 ? (
              <div className="p-4 text-gray-500 text-center">
                Không có thông báo
              </div>
            ) : (
              <ul className="max-h-60 overflow-y-auto">
                {notifications.map((notification, index) => (
                  <li
                    key={notification.id || `notification-${index}`}
                    className={`px-4 py-2 border-b flex justify-between items-center hover:bg-gray-100 cursor-pointer ${
                      notification.isRead ? "" : "bg-gray-200"
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <img
                      src={notification.image || "/default-product.png"}
                      className="w-12 h-12 rounded-lg object-cover mr-3"
                      alt="Product Image"
                    />
                    <div className="flex items-center space-x-2">
                      <div>
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500">
                          {formatRelativeTime(notification.time)}
                        </p>
                      </div>
                    </div>

                    {/* 🗑️ Nút xóa thông báo + Dấu chấm xanh */}
                    <div className="relative">
                      {!notification.isRead && (
                        <span className="absolute -top-5 -right-0 w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeNotification(notification.id);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* 👤 Avatar Admin */}
        {dataProfile?.avatar && (
          <Link href="/admin/profile" className="w-[40px] aspect-square">
            <img
              src={dataProfile.avatar}
              className="w-full h-full object-cover rounded-full"
              alt="Avatar"
            />
          </Link>
        )}

        {/* 🚪 Nút Đăng xuất */}
        <span onClick={handleClickLogout} className="cursor-pointer">
          <FaArrowRightFromBracket className="text-[#6D7587] text-[20px] hover:text-red-500" />
        </span>
      </div>
    </div>
  );
}
