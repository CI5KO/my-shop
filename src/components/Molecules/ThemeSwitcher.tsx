"use client";

import { useState, useEffect } from "react";
import Switch from "../atoms/Switch";
import { PiSunFill, PiMoonFill } from "react-icons/pi";

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark") as boolean);
  }, []);

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  }

  return (
    <Switch
      IconOn={<PiSunFill className="w-6 h-6" />}
      IconOff={<PiMoonFill className="w-6 h-6" />}
      isOn={isDark}
      onToggle={toggleTheme}
    />
  );
}
