export type Validator = (value: string) => string | null;

export const required = (msg = "این فیلد الزامی است"): Validator => (v) => {
  if (v === undefined || v === null) return msg;
  if (String(v).trim() === "") return msg;
  return null;
};

export const minLength = (len: number, msg?: string): Validator => (v) => {
  if (String(v).length < len) return msg || `حداقل ${len} رقم لازم است`;
  return null;
};

export const maxLength = (len: number, msg?: string): Validator => (v) => {
  if (String(v).length > len) return msg || `حداکثر ${len} رقم مجاز است`;
  return null;
};

export const isEmail: Validator = (v) => {
  if (!v) return null;
  // simple email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(v) ? null : "ایمیل نامعتبر است";
};

export const isPhone: Validator = (v) => {
  if (!v) return null;
  // allow 10-13 digits with optional leading + or 0
  const digits = v.replace(/[^0-9]/g, "");
  if (digits.length < 8 || digits.length > 14) return "شماره تلفن نامعتبر است";
  return null;
};

export const isNumeric: Validator = (v) => {
  if (!v) return null;
  return /^-?\d+(\.\d+)?$/.test(v) ? null : "فقط عدد مجاز است";
};

export const minValue = (min: number, msg?: string): Validator => (v) => {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  if (Number.isNaN(n) || n < min) return msg || `مقدار باید حداقل ${min} باشد`;
  return null;
};

export const maxValue = (max: number, msg?: string): Validator => (v) => {
  if (v === "" || v === null || v === undefined) return null;
  const n = Number(v);
  if (Number.isNaN(n) || n > max) return msg || `مقدار باید حداکثر ${max} باشد`;
  return null;
};

export const combineValidators = (validators: Validator[] = []) : Validator => (v) => {
  for (const fn of validators) {
    const res = fn(v);
    if (res) return res;
  }
  return null;
};
