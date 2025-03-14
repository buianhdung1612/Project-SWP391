"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const dataValues = [120, 95, 80, 65, 50];
    const total = dataValues.reduce((acc, val) => acc + val, 0);
    const dataPercentages = dataValues.map(value => ((value / total) * 100).toFixed(1) + "%");

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Son môi", "Kem dưỡng", "Sữa rửa mặt", "Serum", "Mặt nạ"],
        datasets: [{
          backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
          data: dataValues
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Top sản phẩm bán chạy",
            font: {
              size: 20
            }
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
  }, []);

  return <div className="w-full max-w-2xl h-96"><canvas ref={chartRef} className="w-full h-full" /></div>;
};

export default PieChart;