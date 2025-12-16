import React from "react";

interface ScreenProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export default function Screen({ children, bg = "bg-gray-100", className = "" }: ScreenProps) {
  return (
    <div className={`min-h-screen ${bg} flex flex-col font-sans rtl ${className}`}>
      {children}
    </div>
  );
}
