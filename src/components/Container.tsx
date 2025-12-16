import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

export default function Container({ children, className = "", maxWidth = "max-w-5xl" }: ContainerProps) {
  return (
    <div className={`w-full ${maxWidth} mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
