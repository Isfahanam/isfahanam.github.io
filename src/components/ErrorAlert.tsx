import React from "react";

interface Props {
  message: string;
}

export default function ErrorAlert({ message }: Props) {
  return (
    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 shadow-md animate-fadeIn">
      {message}
    </div>
  );
}
