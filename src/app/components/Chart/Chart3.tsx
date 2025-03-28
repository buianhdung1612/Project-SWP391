"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  FontSpec,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const RatingLineChart = () => {
  const data = {
    labels: ["01 Mar", "02 Mar", "03 Mar", "04 Mar", "05 Mar", "06 Mar", "07 Mar"],
    datasets: [
      {
        label: "Rating trung bình",
        data: [4.2, 4.5, 4.3, 4.0, 4.1, 4.4, 4.6], // Giả lập rating theo ngày
        borderColor: "#4CAF50", // Màu xanh lá
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#fff",
        pointRadius: 5,
        tension: 0.3, // Độ cong của đường
      },
    ],
  };

  const titleFont: Partial<FontSpec> = { size: 18, weight: "bold" };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Xu hướng Rating trung bình theo ngày",
        font: titleFont, // 👈 Fix lỗi font
        color: "#333",
      },
      legend: { display: false },
    },
    scales: {
      x: {
        title: { display: true, text: "Ngày", font: { size: 14 } },
        ticks: { color: "#666" },
      },
      y: {
        title: { display: true, text: "Rating", font: { size: 14 } },
        min: 1,
        max: 5,
        ticks: { stepSize: 0.5, color: "#666" },
      },
    },
  };

  return (
    <div className="h-80 ml-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default RatingLineChart;
