"use client";

import ThemeSwitcher from "../Molecules/ThemeSwitcher";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-semibold">Shop</h1>
      <ThemeSwitcher />
    </header>
  );
}
