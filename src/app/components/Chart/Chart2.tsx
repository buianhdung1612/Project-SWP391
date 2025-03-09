"use client";

import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
};
const PieChartComponent = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(""); // Thay URL backend của bạn
        const result = await response.json();
        setChartData({
          labels: result.labels,
          datasets: [
            {
              label: "Dataset",
              data: result.data,
              backgroundColor: result.colors || ["#AA0000", "#4d79ff", "#00CC00", "#FF9900"],
              borderWidth: 1,
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
  };

  return (
    <div style={{ width: "300px", height: "300px", margin: "auto" }}>
      {chartData ? <Pie data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default PieChartComponent;
