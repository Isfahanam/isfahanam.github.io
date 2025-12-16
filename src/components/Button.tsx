import React from "react";

interface Props {
  text: string;
  loading?: boolean;
}

export default function Button({ text, loading = false }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-full py-3 px-4 rounded-lg text-white font-semibold flex justify-center items-center transition-all ${
        loading ? "bg-primary/60 cursor-not-allowed" : "cursor-pointer bg-primary hover:bg-primary/90"
      }`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 ml-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      )}
      {text}
    </button>
  );
}
