import Chart from "@/app/components/Chart/Chart";
import Chart2 from "@/app/components/Chart/Chart2";
import { StatCard } from "@/app/components/StatCard/StatCard";
import { Eye, ShoppingCart, MessageCircle, DollarSign } from "lucide-react";

export default function DashboardAdminPage() {
  // const dataProfile = useContext(ProfileAdminContext);
  // const permissions = dataProfile?.permissions;

  return (
    <>
      <div className="p-6 bg-gray-100 w-full">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

        {/* Thống kê dạng thẻ */}
        <div className="grid grid-cols-4 gap-4 mb-6 font-bold text-[#374785]" >
          <StatCard value="1,504" label="Daily Views" icon={<Eye />} />
          <StatCard value="80" label="Sales" icon={<ShoppingCart />} />
          <StatCard value="284" label="Comments" icon={<MessageCircle />} />
          <StatCard value="$7,842" label="Earning" icon={<DollarSign />} />
        </div>

        {/* Placeholder cho biểu đồ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full w-full">

            <p className="text-gray-400 mx-auto"><Chart /></p>

          </div>

          <div className="bg-white shadow-md rounded-lg p-6 h-96 flex items-center justify-center w-full">

            <p className="text-gray-400"><Chart2 /></p>

          </div>

        </div>

      </div>
    </>
  );
}