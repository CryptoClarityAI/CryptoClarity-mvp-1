import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="bg-white p-6 rounded-xl shadow">{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
