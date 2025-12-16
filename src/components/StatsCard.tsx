import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color = "bg-blue-100" }) => (
  <div className={`flex items-center gap-3 rounded-lg shadow p-4 ${color}`}>
    {icon && <div className="text-2xl">{icon}</div>}
    <div>
      <div className="font-bold text-lg">{value}</div>
      <div className="text-xs text-gray-600">{title}</div>
    </div>
  </div>
);

export default StatsCard;
