"use client";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
type ChartData = {
  labels: number[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
};

const LineChartComponent = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(""); // Thay URL backend của bạn
        const result = await response.json();
        setChartData({
          labels: result.labels, // Dữ liệu trục X từ backend
          datasets: [
            {
              label: "Dataset 1",
              data: result.dataset1, // Dữ liệu từ backend
              borderColor: "#AA0000",
              borderWidth: 4,
              fill: false,
            },
            {
              label: "Dataset 2",
              data: result.dataset2, // Dữ liệu từ backend
              borderColor: "#4d79ff",
              borderWidth: 4,
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div style={{ width: "1000px", height: "300px", margin: "auto", padding: "10px" }}>
      {chartData ? <Line data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default LineChartComponent;
