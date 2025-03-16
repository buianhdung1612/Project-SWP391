"use client";

import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [topProducts, setTopProducts] = useState<{ name: string; sales: number }[]>([]);

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

          if (data.top10ProductSelling) {
            setTopProducts(
              data.top10ProductSelling
                .slice(0, 3) // 🔥 Chỉ lấy 3 sản phẩm đầu tiên
                .map((product: any) => ({
                  name: product.title || "Không có tiêu đề",
                  sales: product.sales || 0
                }))
            );
          }
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

  useEffect(() => {
    if (!chartRef.current || topProducts.length === 0) return;
    
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Xóa biểu đồ cũ nếu có
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const dataValues = topProducts.map((product) => product.sales);
    const total = dataValues.reduce((acc, val) => acc + val, 0);
    const dataPercentages = dataValues.map(value => ((value / total) * 100).toFixed(1) + "%");

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: {
        labels: topProducts.map((product) => product.name),
        datasets: [{
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
          data: dataValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Top 3 sản phẩm bán chạy",
            font: { size: 20 }
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const index = tooltipItem.dataIndex;
                return `${tooltipItem.label}: ${dataValues[index]} sản phẩm (${dataPercentages[index]})`;
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [topProducts]);

  return <div className="w-full h-96"><canvas ref={chartRef} className="w-full h-full" /></div>;
};

export default PieChart;
