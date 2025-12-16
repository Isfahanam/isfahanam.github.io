import React from "react";
import { Validator, combineValidators, required as requiredValidator } from "../../utils/validation";

interface TextFieldProps {
  name?: string;
  label?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  validators?: Validator[];
  type?: string;
  className?: string;
}

export default function TextField({
  name,
  label,
  value,
  onChange,
  placeholder,
  required,
  validators = [],
  type = "text",
  className = "",
}: TextFieldProps) {
  const [touched, setTouched] = React.useState(false);
  const validator = React.useMemo(() => {
    const all = [...validators];
    if (required) all.unshift(requiredValidator());
    return combineValidators(all);
  }, [validators, required]);
  const error = touched ? validator(value) : null;

  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        className={`w-full border rounded px-3 py-2 focus:outline-none transition ${
          error ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.06)]" : "border-gray-300 focus:ring-2 focus:ring-primary"
        }`}
      />
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
}
