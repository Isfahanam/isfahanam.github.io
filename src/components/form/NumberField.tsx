import React from "react";
import TextField from "./TextField";
import { isNumeric } from "../../utils/validation";

interface NumberFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function NumberField({ label = "عدد", value, onChange, placeholder, required = false }: NumberFieldProps) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type="number"
      validators={[isNumeric]}
      required={required}
      placeholder={placeholder}
    />
  );
}
