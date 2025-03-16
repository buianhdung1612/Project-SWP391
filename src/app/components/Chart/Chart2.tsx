"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
// import { Bold } from "lucide-react";

const RevenueChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string }[];
  } | null>(null);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://freshskinweb.onrender.com/admin/orders");
        const result = await response.json();

        if (!result.data || !result.data.orders) {
          throw new Error("Dữ liệu API không hợp lệ");
        }

        const orders = result.data.orders;

        // Nhóm doanh thu theo ngày
        const revenueByDate: Record<string, number> = orders.reduce(
          (acc: Record<string, number>, order: { orderDate: string; totalPrice: number }) => {
            const date = order.orderDate;
            acc[date] = (acc[date] || 0) + order.totalPrice;
            return acc;
          },
          {}
        );

        // Lấy 5 ngày gần nhất
        const labels = Object.keys(revenueByDate)
          .sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) // Sắp xếp ngày giảm dần
          .slice(0,2) // Lấy 5 ngày gần nhất
          .reverse(); // Đảo thứ tự để hiển thị từ cũ đến mới

        // Cập nhật dữ liệu cho biểu đồ
        setChartData({
          labels,
          datasets: [
            {
              label: "Doanh thu theo ngày",
              data: labels.map(date => revenueByDate[date]), // Lấy dữ liệu theo ngày đã lọc
              backgroundColor: "#1565C0", // Xanh dương
            },
          ],
        });

        // Cập nhật options để điều chỉnh cột
        setChartOptions({
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: { color: "#333" },
              grid: { display: false },
              barPercentage: 10, // Giảm độ rộng cột
              categoryPercentage: 0.6, // Điều chỉnh khoảng cách giữa các cột
            },
            y: {
              beginAtZero: true,
              ticks: { color: "#333" },
            },
          },
        });

      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "1000px", height: "300px", margin: "auto" }}>
    {/* <h2  style={{ fontSize: "20px" }}>Biểu đồ doanh thu theo ngày</h2> */}
      {chartData ? <Bar data={chartData} options={chartOptions} /> : <p>Đang tải dữ liệu...</p>}
    </div>
  );
};

export default RevenueChart; 