"use client";

import Switch from "../atoms/Switch";
import ThemeSwitcher from "../Molecules/ThemeSwitcher";

import { FaMale, FaFemale, FaPlus, FaMinus } from "react-icons/fa";

interface HeaderProps {
  gender: string;
  isZoom: boolean;
  onGenderChange: (gender: string) => void;
  onZoomChange: (isZoom: boolean) => void;
}

export default function Header({
  gender,
  isZoom,
  onGenderChange,
  onZoomChange,
}: HeaderProps) {
  return (
    <>
      <div className="h-18" />
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <h1 className="text-xl">Shop</h1>
        <section className="flex gap-2">
          <FaMale
            className={
              gender === "male"
                ? "w-6 h-6 text-blue-500 shadow-blue-500 drop-shadow-lg"
                : "w-6 h-6"
            }
            onClick={() => onGenderChange("male")}
          />
          <FaFemale
            className={
              gender === "female"
                ? "w-6 h-6 text-pink-500 shadow-pink-500 drop-shadow-lg"
                : "w-6 h-6"
            }
            onClick={() => onGenderChange("female")}
          />
        </section>
        <section className="flex items-center gap-2">
          <Switch
            isOn={isZoom}
            IconOn={<FaMinus className="w-6 h-6" />}
            IconOff={<FaPlus className="w-6 h-6" />}
            onToggle={() => onZoomChange(!isZoom)}
          />
          <ThemeSwitcher />
        </section>
      </header>
    </>
  );
}
