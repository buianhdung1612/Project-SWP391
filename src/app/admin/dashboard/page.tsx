import Chart from "@/app/components/Chart/Chart";
import Chart2 from "@/app/components/Chart/Chart2";
import { StatCard } from "@/app/components/StatCard/StatCard";
import { Eye, ShoppingCart, MessageCircle, DollarSign } from "lucide-react";

export default function DashboardAdminPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard value="1,504" label="Daily Views" icon={<Eye />} />
        <StatCard value="80" label="Sales" icon={<ShoppingCart />} />
        <StatCard value="284" label="Comments" icon={<MessageCircle />} />
        <StatCard value="$7,842" label="Earning" icon={<DollarSign />} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Chart2 />
        <Chart />
      </div>
    </div>
  );
}
