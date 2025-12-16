import React from "react";

// نقشه ساده SVG استان اصفهان (نمونه، قابل جایگزینی با نقشه دقیق‌تر)
const ProvinceMap: React.FC = () => (
  <div className="w-full flex justify-center my-4">
    <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="300" height="180" rx="30" fill="#e0e7ff" stroke="#3b82f6" strokeWidth="3" />
      <text x="160" y="120" textAnchor="middle" fontSize="22" fill="#1e293b">نقشه استان اصفهان</text>
      <circle cx="80" cy="80" r="8" fill="#3b82f6" />
      <text x="80" y="75" textAnchor="middle" fontSize="12" fill="#1e293b">کاشان</text>
      <circle cx="200" cy="100" r="8" fill="#f59e42" />
      <text x="200" y="95" textAnchor="middle" fontSize="12" fill="#1e293b">اصفهان</text>
      <circle cx="120" cy="160" r="8" fill="#10b981" />
      <text x="120" y="155" textAnchor="middle" fontSize="12" fill="#1e293b">نطنز</text>
      <circle cx="250" cy="150" r="8" fill="#f43f5e" />
      <text x="250" y="145" textAnchor="middle" fontSize="12" fill="#1e293b">اردستان</text>
    </svg>
  </div>
);

export default ProvinceMap;
