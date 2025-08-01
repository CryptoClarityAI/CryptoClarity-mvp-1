import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sl">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
