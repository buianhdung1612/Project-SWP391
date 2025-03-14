"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Son môi", "Kem dưỡng", "Sữa rửa mặt", "Serum", "Mặt nạ"],
        datasets: [{
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
          data: [120, 95, 80, 65, 50]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Top sản phẩm bán chạy"
          }
        }
      }
    });
  }, []);
  
  return <canvas ref={chartRef} className="w-full max-w-md" />;
};

export default PieChart;
