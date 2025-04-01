import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

const VoucherChart = () => {
  const [chartVoucherData, setChartVoucherData] = useState<{ labels: string[]; datasets: Dataset[] }>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    const ws = new WebSocket("wss://freshskinweb.onrender.com/ws/dashboard");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.data) {
        const labels: string[] = data.data.map((item: any) => item.name);
        const usedData: number[] = data.data.map((item: any) => item.used);
        const usageLimitData: number[] = data.data.map((item: any) => item.usageLimit);

        setChartVoucherData({
          labels: labels,
          datasets: [
            {
              label: "Số lần đã sử dụng",
              data: usedData,
              backgroundColor: "rgba(54, 162, 235, 0.6)"
            },
            {
              label: "Giới hạn sử dụng",
              data: usageLimitData,
              backgroundColor: "rgba(255, 99, 132, 0.6)"
            }
          ]
        });
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Thống kê voucher",
        font: { size: 16, weight: 700 },
        color: "#333"
      }
    }
  };

  return (
    <div className="p-7 h-80 flex items-center justify-center w-full">
      <Bar data={chartVoucherData} options={options} />
    </div>
  );
};

export default VoucherChart;