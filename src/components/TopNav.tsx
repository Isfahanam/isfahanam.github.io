import React from "react";

interface TopNavProps {
  title: string;
  hasLogo?: boolean;
  showBack?: boolean;
}

export default function TopNav({ title, hasLogo = true, showBack = false }: TopNavProps) {
  return (
    <header className="bg-white shadow-md py-4 px-6 rtl">
      <div className="flex items-center gap-3">
        {hasLogo && <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded" />}
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      </div>
    </header>
  );
}
