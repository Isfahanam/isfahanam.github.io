import React from "react";
import TextField from "./TextField";

interface SearchFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchField({ label, value, onChange, placeholder, className = "" }: SearchFieldProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type="search"
      placeholder={placeholder}
      className={className}
    />
  );
}
