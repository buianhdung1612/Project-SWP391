import BlogDetail from "@/app/(page)/blogs/detail/[slug]/page";
import BlogItem from "@/app/components/Blog/BlogItem";
import Chart from "@/app/components/Chart/Chart";
import Chart2 from "@/app/components/Chart/Chart2";
import { StatCard } from "@/app/components/StatCard/StatCard";
import { Eye, ShoppingCart, CheckCircle, MessageCircle, DollarSign, ShoppingBag, User2Icon, FileText, Clock, CheckSquare } from "lucide-react";

export default function DashboardAdminPage() {
  const topSellingProducts = [
    { name: "Kem dưỡng ẩm", price: "350.000 VND" },
    { name: "Sữa rửa mặt", price: "220.000 VND" },
    { name: "Toner làm dịu da", price: "280.000 VND" },
    { name: "Serum vitamin C", price: "450.000 VND" },
    { name: "Mặt nạ dưỡng da", price: "150.000 VND" },
    { name: "Kem chống nắng", price: "370.000 VND" },
    { name: "Tinh chất phục hồi da", price: "480.000 VND" },
    { name: "Sữa tẩy trang", price: "260.000 VND" },
    { name: "Bộ sản phẩm dưỡng da", price: "890.000 VND" },
    { name: "Gel trị mụn", price: "320.000 VND" }
  ];

  return (
    <>
      <div className="p-6 bg-gray-100 w-full">
        <h1 className="text-2xl  mb-4">Dashboard</h1>

        {/* Thống kê dạng thẻ */}
        <div className="grid grid-cols-5 gap-6 mb-6 font-bold text-[#374785]">
        <StatCard value="1,504" label="Lượt xem" icon={<Eye className='text-blue-500' />} />
        <StatCard value="40" label="Tổng người dùng" icon={<User2Icon className='text-indigo-500' />} />
        <StatCard value="80" label="Lượt bán" icon={<ShoppingCart className='text-green-500' />} />
        <StatCard value="$7,842" label="Doanh thu" icon={<DollarSign className='text-yellow-500' />} />
        <StatCard value="284" label="Bình luận" icon={<MessageCircle className='text-purple-500' />} />
        <StatCard value="12/23" label="Chờ duyệt" icon={<Clock className='text-orange-500' />} />
        <StatCard value="30" label="Đã duyệt" icon={<CheckCircle className='text-blue-500' />} />
        <StatCard value="30" label="Đơn hủy" icon={<ShoppingBag className='text-red-500' />} />
        <StatCard value="80" label="Hoàn thành" icon={<CheckSquare className='text-green-500' />} />
        <StatCard value="40" label="Bài viết" icon={<FileText className='text-gray-500' />} />
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
