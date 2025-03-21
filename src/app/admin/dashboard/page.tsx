"use client";

import { useEffect, useState, useRef } from "react";
import Chart from "@/app/components/Chart/Chart";
import Chart2 from "@/app/components/Chart/Chart2";
import { StatCard } from "@/app/components/StatCard/StatCard";
import { ShoppingCart, Boxes, CheckCircle, Star, Banknote, ShoppingBag, User2Icon, FileText, Clock, CheckSquare } from "lucide-react";

export default function DashboardAdminPage() {
  const [stats, setStats] = useState({
    totalOrder: "0",
    totalOrderCompleted: "0",
    totalOrderPending: "0",
    totalOrderCanceled: "0",
    totalRevenue: "0",
    totalProducts: "0",
    totalUsers: "0",
    totalFeedbacks: "0",
    totalBlogs: "0",
  });

  const [top10ProductSelling, setTop10ProductSelling] = useState<{ title: string }[]>([]);
  const wsRef = useRef<WebSocket | null>(null); // Dùng useRef để lưu WebSocket
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function connectWebSocket() {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) return;

      console.log("🔌 Kết nối WebSocket...");
      wsRef.current = new WebSocket("wss://freshskinweb.onrender.com/ws/dashboard");

      wsRef.current.onopen = () => {
        console.log("✅ WebSocket đã kết nối!");
        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      };

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("📩 Dữ liệu nhận:", data);

          // Cập nhật state nếu có thay đổi thực sự
          setStats((prevStats) => {
            const newStats = {
              ...prevStats,
              totalOrder: data.totalOrder || prevStats.totalOrder,
              totalOrderCompleted: data.totalOrderCompleted || prevStats.totalOrderCompleted,
              totalOrderPending: data.totalOrderPending || prevStats.totalOrderPending,
              totalOrderCanceled: data.totalOrderCanceled || prevStats.totalOrderCanceled,
              totalRevenue: data.totalRevenue || prevStats.totalRevenue,
              totalProducts: data.totalProducts || prevStats.totalProducts,
              totalUsers: data.totalUsers || prevStats.totalUsers,
              totalFeedbacks: data.totalFeedbacks || prevStats.totalFeedbacks,
              totalBlogs: data.totalBlogs || prevStats.totalBlogs,
            };

            // Chỉ cập nhật nếu dữ liệu thay đổi
            return JSON.stringify(newStats) !== JSON.stringify(prevStats) ? newStats : prevStats;
          });

          if (data.top10ProductSelling) {
            setTop10ProductSelling((prevProducts) => {
              const newProducts = data.top10ProductSelling.map((product: any) => ({
                title: product.title || "Không có tiêu đề",
              }));
              return JSON.stringify(newProducts) !== JSON.stringify(prevProducts) ? newProducts : prevProducts;
            });
          }
        } catch (error) {
          console.error("❌ Lỗi xử lý WebSocket:", error);
        }
      };

      wsRef.current.onclose = () => {
        console.warn("⚠️ WebSocket đóng! Thử kết nối lại sau 5s...");
        wsRef.current = null;
        reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000);
      };
    }

    connectWebSocket();

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="p-4 md:p-6 bg-gray-100 max-w-screen-xl mx-auto">
      {stats.totalOrder === "0" && stats.totalUsers === "0" ? (
        <p className="text-lg font-semibold text-gray-500">Đang tải dữ liệu...</p>
      ) : (
        <>
          <h1 className="text-2xl mb-4">Dashboard</h1>
          {/* Thống kê dạng thẻ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-5 font-bold text-[#374785]">
            <StatCard value={stats.totalProducts} label="Số sản phẩm" icon={<Boxes className="text-indigo-500" />} />
            <StatCard value={stats.totalRevenue} label="Doanh thu" icon={<Banknote className="text-yellow-500" />} />
            <StatCard value={stats.totalUsers} label="Tổng người dùng" icon={<User2Icon className="text-indigo-500" />} />
            <StatCard value={stats.totalFeedbacks} label="Đánh giá" icon={<Star className="text-purple-500" />} />
            <StatCard value={stats.totalBlogs} label="Bài viết" icon={<FileText className="text-gray-500" />} />
            <StatCard value={stats.totalOrder} label="Tổng đơn hàng" icon={<ShoppingCart className="text-green-500" />} />
            <StatCard value={stats.totalOrderPending} label="Đơn chờ duyệt" icon={<Clock className="text-orange-500" />} />
            <StatCard value={stats.totalOrderCompleted} label="Đơn đã duyệt" icon={<CheckSquare className="text-orange-500" />} />
            <StatCard value={stats.totalOrderCanceled} label="Đơn đã hủy" icon={<ShoppingBag className="text-red-500" />} />
            <StatCard value={stats.totalOrderCompleted} label="Hoàn thành" icon={<CheckCircle className="text-blue-500" />} />
          </div>

          {/* Biểu đồ & Bảng sản phẩm bán chạy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 h-80 flex items-center justify-center w-full">
              <Chart />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 h-80">
              <h2 className="text-xl font-semibold mb-4">Top 10 Sản Phẩm Bán Chạy</h2>
              <div className="overflow-y-auto max-h-64">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="sticky top-0 bg-blue-600 text-white z-10">
                    <tr>
                      <th className="border bg-blue-600 p-2 text-left">Sản phẩm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {top10ProductSelling.map((product, index) => (
                      <tr key={index} className="border border-gray-300">
                        <td className="border border-gray-300 p-2">{product.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 mt-4 h-80">
            <Chart2 />
          </div>
        </>
      )}
    </div>
  );
}
