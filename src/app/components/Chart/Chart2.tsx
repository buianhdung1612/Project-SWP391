"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const RevenueChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string }[];
  } | null>(null);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        // Gọi 3 API cùng lúc
        const [res1, res2, res3] = await Promise.all([
          fetch("https://freshskinweb.onrender.com/admin/orders?page=1"),
          fetch("https://freshskinweb.onrender.com/admin/orders?page=2"),
          fetch("https://freshskinweb.onrender.com/admin/orders?page=3"),
        ]);

        // Chuyển đổi dữ liệu sang JSON
        const [data1, data2, data3] = await Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
        ]);

        // Kiểm tra nếu API trả về đúng dữ liệu
        if (!data1.data || !data2.data || !data3.data) {
          throw new Error("Dữ liệu API không hợp lệ");
        }

        // Gộp tất cả đơn hàng từ 3 API
        const allOrders = [
          ...data1.data.orders,
          ...data2.data.orders,
          ...data3.data.orders,
        ];

        console.log("📊 Tất cả đơn hàng đã fetch:", allOrders);

        // Nhóm doanh thu theo ngày
        const revenueByDate: Record<string, number> = allOrders.reduce(
          (acc: Record<string, number>, order: { orderDate: string; totalPrice: number }) => {
            const date = order.orderDate;
            acc[date] = (acc[date] || 0) + order.totalPrice;
            return acc;
          },
          {}
        );

        // Lấy 5 ngày gần nhất
        const labels = Object.keys(revenueByDate)
          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) // Sắp xếp giảm dần
          .slice(0, 5) // Chỉ lấy 5 ngày gần nhất
          .reverse(); // Đảo thứ tự lại để hiển thị từ cũ đến mới

        // Cập nhật dữ liệu biểu đồ
        setChartData({
          labels,
          datasets: [
            {
              label: "Doanh thu theo ngày",
              data: labels.map((date) => revenueByDate[date]), // Dữ liệu theo ngày
              backgroundColor: "#1565C0",
            
            },
          ],
        });

        // Cập nhật options
        setChartOptions({
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { color: "#333" },
              grid: { display: false },
              maxBarThickness: 40, 
            },
            y: {
              beginAtZero: true,
              ticks: { color: "#333" },
              
            },
          },
        });
      } catch (error) {
        console.error("❌ Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <div style={{ width: "1000px", height: "300px", margin: "left" }}>
      {chartData ? <Bar data={chartData} options={chartOptions} /> : <p></p>}
    </div>
  );
};

export default RevenueChart;
