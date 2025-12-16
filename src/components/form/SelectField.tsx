import React from "react";
import { Validator, combineValidators, required as requiredValidator } from "../../utils/validation";

interface Option { value: string; label: string }

interface SelectFieldProps {
  label?: string;
  name?: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  required?: boolean;
  validators?: Validator[];
  className?: string;
}

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  validators = [],
  className = "",
}: SelectFieldProps) {
  const [touched, setTouched] = React.useState(false);
  const validator = React.useMemo(() => {
    const all = [...validators];
    if (required) all.unshift(requiredValidator());
    return combineValidators(all);
  }, [validators, required]);
  const error = touched ? validator(value) : null;

  return (
    <div className={`w-full relative ${className}`}>
      {label && <label className="block mb-1 text-gray-700">{label}</label>}
      {/* custom left chevron to replace native arrow and control spacing */}
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        className={`w-full border rounded pr-3 pl-10 py-2 focus:outline-none transition appearance-none ${
          error ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.06)]" : "border-gray-300 focus:ring-2 focus:ring-primary"
        }`}
      >
        <option value="">انتخاب کنید</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
}
