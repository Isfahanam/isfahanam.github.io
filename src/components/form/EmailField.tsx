import React from "react";
import TextField from "./TextField";
import { isEmail } from "../../utils/validation";

interface EmailFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}

export default function EmailField({ label = "ایمیل", value, onChange, required = false, placeholder }: EmailFieldProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type="email"
      validators={[isEmail]}
      required={required}
      placeholder={placeholder}
    />
  );
}
