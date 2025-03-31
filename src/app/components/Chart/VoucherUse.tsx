import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const VoucherChart = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: { label: string; data: number[]; backgroundColor: string }[];
      }>({
        labels: [],
        datasets: []
      });

  useEffect(() => {
    fetch("https://freshskinweb.onrender.com/admin/vouchers")
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const labels = data.data.map((item:any) => item.name);
          const usedData = data.data.map((item:any ) => item.used);
          const usageLimitData = data.data.map((item:any) => item.usageLimit);

          setChartData({
            labels,
            datasets: [
              {
                label: "Số lần đã sử dụng",
                data: usedData,
                backgroundColor: "rgba(54, 162, 235, 0.6)",
              },
              {
                label: "Giới hạn sử dụng",
                data: usageLimitData,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
              },
            ],
          });
        }
      })
  }, []);

  return (
   
    <div className="p-7 h-80 flex items-center justify-center w-full">
        <h2>Thống kê voucher</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default VoucherChart;
