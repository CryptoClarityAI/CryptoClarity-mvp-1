import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      {...props}
    />
  );
}
