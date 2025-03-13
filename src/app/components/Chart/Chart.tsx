"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
};

// type BackendResponse = {
//    labels: string[];
//    totalPrice: number[];
//    amount: number[];
//  };

const BarChartComponent = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  type Order = {
    orderId: string;
    totalPrice: number;
    totalAmount: number;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://freshskinweb.onrender.com/admin/orders");
        const result = await response.json();
    
        if (!result.data || !result.data.orders) {
          throw new Error("Dữ liệu API không hợp lệ");
        }
    
        const orders: Order[] = result.data.orders;
    
        // Trích xuất labels (ID đơn hàng) và dữ liệu cho totalPrice, totalAmount
        const labels = orders.map((order) => `Order ${order.orderId}`);
        const totalPrices = orders.map((order) => order.totalPrice);
        const totalAmounts = orders.map((order) => order.totalAmount);
    
        setChartData({
          labels,
          datasets: [
            {
              label: "Total Price",
              data: totalPrices,
              backgroundColor: "#1565C0",
            },
            {
              label: "Amount",
              data: totalAmounts,
              backgroundColor: "#FF5733",
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
    <div style={{ width: "550px", height: "350px", margin: "auto", padding: "10px" }}>
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChartComponent;