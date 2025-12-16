import React from "react";
import { Validator, combineValidators, required as requiredValidator } from "../../utils/validation";
import { toPersianNumber, toEnglishNumber } from "../../utils/numbers";
import SelectField from "./SelectField";
import { jalaaliMonthLength, isValidJalaaliDate } from "jalaali-js";

interface DateFieldProps {
  label?: string;
  /** value is a Jalali date in latin digits: YYYY/MM/DD (e.g. 1404/09/11) */
  value: string;
  onChange: (v: string) => void;
  validators?: Validator[];
  required?: boolean;
}

const PERSIAN_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

function parseValue(v: string) {
  if (!v) return null;
  const cleaned = v.replace(/[-.\s]/g, "/");
  const parts = cleaned.split("/");
  if (parts.length < 3) return null;
  const [y, m, d] = parts.map((p) => parseInt(toEnglishNumber(p), 10));
  if (Number.isNaN(y) || Number.isNaN(m) || Number.isNaN(d)) return null;
  return { y, m, d };
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function DateField({ label = "تاریخ", value, onChange, validators = [], required = false }: DateFieldProps) {
  const [open, setOpen] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const validator = React.useMemo(() => {
    const all = [...validators];
    if (typeof required !== "undefined" && required) all.unshift(requiredValidator());
    return combineValidators(all);
  }, [validators, required]);

  const error = touched ? validator(value) : null;

  const initial = React.useMemo(() => {
    const parsed = parseValue(value);
    if (parsed) return parsed;

    try {
      const now = new Date();
      const parts = new Intl.DateTimeFormat("en-u-ca-persian", { year: "numeric", month: "numeric", day: "numeric" }).formatToParts(now);
      const y = Number(parts.find((p) => p.type === "year")?.value || 0);
      const m = Number(parts.find((p) => p.type === "month")?.value || 1);
      const d = Number(parts.find((p) => p.type === "day")?.value || 1);
      return { y, m, d };
    } catch (e) {
      const now = new Date();
      return { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
    }
  }, [value]);

  const [selected, setSelected] = React.useState(() => initial);

  React.useEffect(() => {
    setSelected(parseValue(value) || initial);
  }, [value]);

  const yearRange = React.useMemo(() => {
    const cy = initial?.y || new Date().getFullYear();
    const start = cy - 50;
    const end = cy + 10;
    const arr: number[] = [];
    for (let y = start; y <= end; y++) arr.push(y);
    return arr;
  }, [initial]);

  const daysInMonth = React.useMemo(() => {
    if (!selected) return 31;
    const { y, m } = selected;
    const len = jalaaliMonthLength(y, m);
    return len;
  }, [selected]);

  React.useEffect(() => {
    function handle(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function commitChange(s: { y: number; m: number; d: number }) {
    const v = `${s.y}/${pad(s.m)}/${pad(s.d)}`; // latin digits
    onChange(v);
  }

  return (
    <div className="relative" ref={containerRef}>
      <label className="block mb-1 text-gray-700">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTouched(true)}
        className={`w-full text-left border rounded px-3 py-2 focus:outline-none transition ${
          error ? "border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.06)]" : "border-gray-300 focus:ring-2 focus:ring-primary"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-700">
            {value ? toPersianNumber(value) : `${toPersianNumber(String(selected?.d || ""))} ${PERSIAN_MONTHS[(selected?.m || 1) - 1]} ${toPersianNumber(String(selected?.y || ""))}`}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </button>

      {open && (
        <div className="absolute z-20 left-0 mt-2 w-full bg-white border rounded-lg shadow-lg p-4">
          <div className="flex gap-2">
              <div className="flex-1">
                <SelectField
                  value={selected ? String(selected.y) : ""}
                  onChange={(v) => setSelected((s) => ({ ...(s || { y: initial.y, m: initial.m, d: initial.d }), y: Number(v) }))}
                  options={yearRange.map((y) => ({ value: String(y), label: toPersianNumber(String(y)) }))}
                />
              </div>

              <div className="flex-1">
                <SelectField
                  value={selected ? String(selected.m) : ""}
                  onChange={(v) =>
                    setSelected((s) => {
                      const prev = s || { y: initial.y, m: initial.m, d: initial.d };
                      const nextM = Number(v);
                      const maxDay = jalaaliMonthLength(prev.y, nextM);
                      return { ...prev, m: nextM, d: Math.min(prev.d, maxDay) };
                    })
                  }
                  options={PERSIAN_MONTHS.map((mn, idx) => ({ value: String(idx + 1), label: mn }))}
                />
              </div>

              <div className="w-24">
                <SelectField
                  value={selected ? String(selected.d) : ""}
                  onChange={(v) =>
                    setSelected((s) => {
                      const prev = s || { y: initial.y, m: initial.m, d: initial.d };
                      const nextD = Number(v);
                      const maxDay = jalaaliMonthLength(prev.y, prev.m);
                      return { ...prev, d: Math.min(nextD, maxDay) };
                    })
                  }
                  options={Array.from({ length: daysInMonth }).map((_, i) => ({ value: String(i + 1), label: toPersianNumber(String(i + 1)) }))}
                />
              </div>
          </div>

          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className="px-3 py-1 rounded bg-gray-100"
            >
              لغو
            </button>
            <button
              type="button"
              onClick={() => {
                if (selected) commitChange(selected);
                setOpen(false);
              }}
              className="px-3 py-1 rounded bg-primary text-white"
            >
              انتخاب
            </button>
          </div>
        </div>
      )}

      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
}
