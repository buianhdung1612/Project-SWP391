"use client"
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function TopPrice() {
  const revenueByCategories = [
    { revenue: 429000, category: 'Hỗ trợ trị mụn', date: '2025-03-29' },
    { revenue: 185000, category: 'Chống nắng da mặt', date: '2025-03-27' },
    { revenue: 67150, category: 'Nước tẩy trang', date: '2025-03-27' },
    { revenue: 18065686.75, category: 'Sữa rữa mặt', date: '2025-03-26' },
    { revenue: 17177050, category: 'Kem / Gel / Dầu Dưỡng', date: '2025-03-26' },
    { revenue: 17177050, category: 'Serum / Tinh Chất', date: '2025-03-26' },
    { revenue: 1610000, category: 'Hỗ trợ trị mụn', date: '2025-03-26' },
    { revenue: 149000, category: 'Tẩy tế bào chết', date: '2025-03-26' },
    { revenue: 134300, category: 'Nước tẩy trang', date: '2025-03-26' },
    { revenue: 715000, category: 'Hỗ trợ trị mụn', date: '2025-03-24' },
    { revenue: 330000, category: 'Chống nắng da mặt', date: '2025-03-22' },
    { revenue: 330000, category: 'Xịt Dưỡng Tóc', date: '2025-03-22' },
    { revenue: 11270000, category: 'Hỗ trợ trị mụn', date: '2025-03-21' },
    { revenue: 5331820.5, category: 'Sữa rữa mặt', date: '2025-03-21' },
    { revenue: 1617000, category: 'Dầu Xả', date: '2025-03-21' },
    { revenue: 292320, category: 'Toner / Nước cân bằng da', date: '2025-03-21' },
    { revenue: 190000, category: 'Nước tẩy trang', date: '2025-03-21' },
    { revenue: 7508900, category: 'Xịt khoáng', date: '2025-03-20' },
    { revenue: 4643086.75, category: 'Sữa rữa mặt', date: '2025-03-20' },
    { revenue: 10800760, category: 'Toner / Nước cân bằng da', date: '2025-03-19' },
    { revenue: 2373080, category: 'Dầu Xả', date: '2025-03-19' },
    { revenue: 1929640, category: 'Nước tẩy trang', date: '2025-03-19' },
    { revenue: 4506826.2, category: 'Toner / Nước cân bằng da', date: '2025-03-18' }
  ];

  const groupedData = revenueByCategories.reduce((acc: Record<string, Record<string, number>>, { revenue, category, date }) => {
    if (!acc[category]) acc[category] = {};
    acc[category][date] = (acc[category][date] || 0) + revenue;
    return acc;
  }, {});

  const categories = Object.keys(groupedData);
  const dates = Array.from(new Set(revenueByCategories.map(item => item.date))).sort();

  const chartData = {
    labels: dates,
    datasets: categories.map((category, index) => ({
      label: category,
      data: dates.map(date => groupedData[category][date] || 0),
      backgroundColor: `rgba(${index * 30 % 255}, ${(index * 60 + 100) % 255}, ${(index * 90 + 150) % 255}, 0.7)`
    }))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },  // Thêm `as const` để chỉ định rằng giá trị này là cố định
      title: { display: true, text: "Doanh thu theo danh mục (theo ngày) - Group Bar Chart" }
    },
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Price Chart</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
