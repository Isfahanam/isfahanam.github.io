interface Props {
  label: string;
  name: string;
  dir: "ltr" | "rtl";
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function InputField({
  label,
  name,
  dir,
  value,
  onChange,
  placeholder,
  type = "text",
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        dir={dir}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      />
    </div>
  );
}
