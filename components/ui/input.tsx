import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="w-full border px-3 py-2 rounded-lg shadow-sm"
      {...props}
    />
  );
}
