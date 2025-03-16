"use client";

import { useEffect, useState } from "react";
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
    revenue: "0",
    totalProducts: "0",
    totalUsers: "0",
    totalFeedbacks: "0",
    totalBlogs: "0",
  });

  const [top10ProductSelling, setTop10ProductSelling] = useState<
    { title: string }[]
  >([]);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let reconnectTimeout: NodeJS.Timeout;

    function connectWebSocket() {
      if (ws && ws.readyState === WebSocket.OPEN) return;

      console.log("🔌 Kết nối WebSocket...");
      ws = new WebSocket("wss://freshskinweb.onrender.com/ws/dashboard");

      ws.onopen = () => {
        console.log("✅ WebSocket đã kết nối!");
        clearTimeout(reconnectTimeout);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("📩 Dữ liệu nhận:", data);

          setStats({
            totalOrder: data.totalOrder || "0",
            totalOrderCompleted: data.totalOrderCompleted || "0",
            totalOrderPending: data.totalOrderPending || "0",
            totalOrderCanceled: data.totalOrderCanceled || "0",
            revenue: data.totalRevenue || "0",
            totalProducts: data.totalProducts || "0",
            totalUsers: data.totalUsers || "0",
            totalFeedbacks: data.totalFeedbacks || "0",
            totalBlogs: data.totalBlogs || "0",
          });

          setTop10ProductSelling(
            data.top10ProductSelling?.map((product: any) => ({
              title: product.title || "Không có tiêu đề",
            })) || []
          );
        } catch (error) {
          console.error("❌ Lỗi xử lý WebSocket:", error);
        }
      };

      ws.onclose = () => {
        console.warn("⚠️ WebSocket đóng! Thử kết nối lại...");
        ws = null;
        reconnectTimeout = setTimeout(connectWebSocket, 5000);
      };
    }

    connectWebSocket();

    return () => {
      if (ws) ws.close();
      clearTimeout(reconnectTimeout);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 w-full">
      <h1 className="text-2xl mb-4">Dashboard</h1>

      {/* Thống kê dạng thẻ */}
      <div className="grid grid-cols-5 gap-3 mb-5 font-bold text-[#374785]">
        <StatCard value={stats.totalProducts} label="Số sản phẩm" icon={<Boxes className="text-indigo-500" />} />
        <StatCard value={stats.revenue} label="Doanh thu" icon={<Banknote className="text-yellow-500" />} />
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
      <div className="grid grid-cols-[2fr_3fr] gap-4">

        <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full">
          <Chart />
        </div>

        {/* Bảng sản phẩm bán chạy */}
        <div className="bg-white shadow-md rounded-lg p-6 h-96">
          <h2 className="text-xl font-semibold mb-4">Top 10 Sản Phẩm Bán Chạy</h2>
          <div className="overflow-y-auto max-h-72">
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

      {/* Biểu đồ thứ 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <Chart2 />
      </div>
    </div>
  );
}
