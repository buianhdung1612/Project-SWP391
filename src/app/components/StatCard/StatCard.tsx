import { ReactNode } from "react";

interface StatCardProps {
  value: string | number;
  label: string;
  icon: ReactNode;
}
export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-55">
      <div className="text-2xl">{value}</div>
      <div className="ml-2">
        <div className="text-gray-500 text-sm">{label}</div>
      </div>
      <div className="ml-auto text-gray-600 text-2xl">{icon}</div>
    </div>
  );
}
