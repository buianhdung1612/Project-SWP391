"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const xValues = ["Cocoon", "Obagi", "Vichy", "CeraVe", "SVR"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

    const myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "top doanh thu thương hiệu ",
            font: {
              size: 20, // Tăng kích thước chữ
              weight: "bold", // Bôi đen chữ
            },
            color: "#333", // Màu chữ đậm hơn 
          },
        },
      },
    });

    return () => {
      myChart.destroy(); // Xóa chart khi component unmount
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "100%", maxWidth: "600px" }} />;
};

export default PieChart;
