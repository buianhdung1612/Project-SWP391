import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const RatingChart = () => {
    // Dữ liệu cứng thay vì fetch từ API
    const ratingData = [
        { star: "1★", count: 5 },
        { star: "2★", count: 10 },
        { star: "3★", count: 15 },
        { star: "4★", count: 20 },
        { star: "5★", count: 30 },
    ];

    return (
        <div>
            <h3 className="text-center text-lg font-semibold ">Thống kê đánh giá</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ratingData} margin={{ top: 20, right: 50, bottom: 5 }}>
                    <XAxis dataKey="star" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#82ca9d" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;
