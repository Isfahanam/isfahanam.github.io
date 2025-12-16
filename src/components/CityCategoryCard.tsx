import React from "react";

interface CityCategoryCardProps {
  name: string;
  desc: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CityCategoryCard: React.FC<CityCategoryCardProps> = ({ name, desc, icon, onClick }) => (
  <div className="flex items-center gap-3 bg-white rounded-lg shadow p-4 cursor-pointer hover:bg-blue-50 transition" onClick={onClick}>
    <div className="text-2xl">{icon}</div>
    <div>
      <div className="font-bold text-base">{name}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
  </div>
);

export default CityCategoryCard;
