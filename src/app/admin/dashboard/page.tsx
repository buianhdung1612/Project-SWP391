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
    totalProducts:"0",
    totalUsers: "0",
    totalFeedbacks: "0",
    totalBlogs: "0",
  });

  const [topSellingProducts, setTopSellingProducts] = useState<{ name: string; price: string }[]>([]);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let pingInterval: NodeJS.Timeout;
    let reconnectTimeout: NodeJS.Timeout;

    function connectWebSocket() {
      if (ws && ws.readyState === WebSocket.OPEN) {
        console.log("🚀 WebSocket vẫn đang mở, không cần kết nối lại.");
        return;
      }

      console.log("🔌 Đang kết nối WebSocket...");
      ws = new WebSocket("wss://freshskinweb.onrender.com/ws/dashboard");

      ws.onopen = () => {
        console.log("✅ WebSocket đã kết nối!");
        clearTimeout(reconnectTimeout);

        // Gửi ping giữ kết nối sống
        pingInterval = setInterval(() => {
          if (ws?.readyState === WebSocket.OPEN) {
            console.log("📡 Gửi ping...");
            ws.send(JSON.stringify({ type: "PING" }));
          }
        }, 30000);
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log("📩 Dữ liệu nhận từ WebSocket:", data);
          setStats({
            totalOrder: data.totalOrder || "0",
            totalOrderCompleted: data.totalOrderCompleted || "0",
            totalOrderPending: data.totalOrderPending || "0",
            totalOrderCanceled: data.totalOrderCanceled || "0",
            revenue: data.totalRevenue || "0",
            totalProducts: data.totalProducts || "0",
            totalUsers: data.totalUsers || "0",
            totalFeedbacks: data.totalFeedbacks || "0",
            totalBlogs: data. totalBlogs || "0",
          });

          setTopSellingProducts(data.topSellingProducts || []);
        } catch (error) {
          console.error("❌ Lỗi khi xử lý dữ liệu WebSocket:", error);
        }
      };

      ws.onerror = (error) => {
        console.error("❌ Lỗi WebSocket:", error);
      };

      ws.onclose = () => {
        console.warn("⚠️ WebSocket đã đóng! Đang thử kết nối lại sau 5 giây...");
        clearInterval(pingInterval);
        ws = null;
        reconnectTimeout = setTimeout(connectWebSocket, 5000);
      };
    }

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
      clearInterval(pingInterval);
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
        <StatCard value={stats.totalOrderPending} label="Đơn đã duyệt" icon={<CheckSquare className="text-orange-500" />} />
        <StatCard value={stats.totalOrderCanceled} label="Đơn đã hủy" icon={<ShoppingBag className="text-red-500" />} />
        <StatCard value={stats.totalOrderCompleted} label="Hoàn thành" icon={<CheckCircle className="text-blue-500" />} />
        
      </div>
      

      {/* Biểu đồ & Bảng sản phẩm bán chạy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Biểu đồ Pie */}
        <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full">
          <div className="text-gray-400 mx-auto">
            <Chart />
          </div>
        </div>

        {/* Bảng Top 10 sản phẩm bán chạy */}
        <div className="bg-white shadow-md rounded-lg p-6 h-96 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Top 10 Sản Phẩm Bán Chạy</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border bg-blue-600 p-2 text-left">Sản phẩm</th>
                <th className="border bg-blue-600 p-2 text-left">Giá</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">{product.price} Đ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Biểu đồ doanh thu theo thời gian */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="text-gray-400">
          <Chart2 />
        </div>
      </div>
    </div>
  );
}
