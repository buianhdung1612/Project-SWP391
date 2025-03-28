"use client";
import { useRouter } from "next/navigation"; // Dùng next/navigation thay vì next/router
import React from "react";

function OrderList() {
  const router = useRouter(); // Đảm bảo file này dùng "use client"

  const orders = [
    { id: "#25032605820", status: "Chờ duyệt" },
    { id: "#25032647940", status: "Chờ duyệt" },
    { id: "#25032622710", status: "Chờ duyệt" },
    { id: "#25032666754", status: "Chờ duyệt" },
  ];

  const handleClick = (orderId: string) => {
    router.push(`/admin/orders/detail/${orderId.replace("#", "")}`);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Danh sách đơn hàng</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Mã đơn hàng</th>
            <th className="border border-gray-300 p-2">Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="text-center cursor-pointer hover:bg-gray-100"
              onClick={() => handleClick(order.id)}
            >
              <td className="border border-gray-300 p-2 text-blue-600 underline">
                {order.id}
              </td>
              <td className="border border-gray-300 p-2 text-purple-500">
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
