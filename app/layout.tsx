import type { Metadata } from "next";
import "../src/styles/globals.css";

export const metadata: Metadata = {
  title: "My Shop",
  description: "My Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
