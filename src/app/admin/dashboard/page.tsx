"use client";

import { useEffect, useState } from "react";
import Chart from "@/app/components/Chart/Chart";
import Chart2 from "@/app/components/Chart/Chart2";
import { StatCard } from "@/app/components/StatCard/StatCard";
import { Eye, ShoppingCart, CheckCircle, MessageCircle, DollarSign, ShoppingBag, User2Icon, FileText, Clock, CheckSquare } from "lucide-react";

export default function DashboardAdminPage() {
  const [topSellingProducts, setTopSellingProducts] = useState<{ name: string; price: string }[]>([]);
  const [stats, setStats] = useState({
    views: "0",
    users: "0",
    sales: "0",
    revenue: "$0",
    comments: "0",
    pending: "0",
    approved: "0",
    cancelled: "0",
    completed: "0",
    posts: "0",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        setStats(data.stats);
        setTopSellingProducts(data.topSellingProducts);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100 w-full">
        <h1 className="text-2xl mb-4">Dashboard</h1>

        {/* Thống kê dạng thẻ */}
        <div className="grid grid-cols-5 gap-6 mb-6 font-bold text-[#374785]">
          <StatCard value={stats.views} label="Lượt xem" icon={<Eye className='text-blue-500' />} />
          <StatCard value={stats.users} label="Tổng người dùng" icon={<User2Icon className='text-indigo-500' />} />
          <StatCard value={stats.sales} label="Lượt bán" icon={<ShoppingCart className='text-green-500' />} />
          <StatCard value={stats.revenue} label="Doanh thu" icon={<DollarSign className='text-yellow-500' />} />
          <StatCard value={stats.comments} label="Bình luận" icon={<MessageCircle className='text-purple-500' />} />
          <StatCard value={stats.pending} label="Chờ duyệt" icon={<Clock className='text-orange-500' />} />
          <StatCard value={stats.approved} label="Đã duyệt" icon={<CheckCircle className='text-blue-500' />} />
          <StatCard value={stats.cancelled} label="Đơn hủy" icon={<ShoppingBag className='text-red-500' />} />
          <StatCard value={stats.completed} label="Hoàn thành" icon={<CheckSquare className='text-green-500' />} />
          <StatCard value={stats.posts} label="Bài viết" icon={<FileText className='text-gray-500' />} />
        </div>

        {/* Placeholder cho biểu đồ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full">
            <div className="text-gray-400 mx-auto"><Chart /></div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full">
            <div className="text-gray-400"><Chart2 /></div>
          </div>
        </div>

        {/* Bảng Top 10 sản phẩm bán chạy */}
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Top 10 Sản Phẩm Bán Chạy</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-700">
                <th className="border border-blue-500 p-2 text-left">Sản phẩm</th>
                <th className="border border-gray-300 p-2 text-left">Giá</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
