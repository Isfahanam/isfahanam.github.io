import React from "react";
import TextField from "./TextField";
import { isPhone } from "../../utils/validation";

interface PhoneFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}

export default function PhoneField({ label = "تلفن همراه", value, onChange, required = false, placeholder }: PhoneFieldProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type="tel"
      validators={[isPhone]}
      required={required}
      placeholder={placeholder}
    />
  );
}
