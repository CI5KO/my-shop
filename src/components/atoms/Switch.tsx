import type { ReactNode } from "react";

interface SwitchProps {
  IconOn: ReactNode;
  IconOff: ReactNode;
  isOn: boolean;
  onToggle: () => void;
}

export default function Switch({
  IconOn,
  IconOff,
  isOn,
  onToggle,
}: SwitchProps) {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        onToggle();
      }}
      className="relative w-8 h-8 rounded-lg transition-colors duration-300 cursor-pointer overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center">
        <div
          className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-8" : "translate-x-1"
          }`}
        >
          {IconOff}
        </div>
        <div
          className={`absolute w-6 h-6 transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-1" : "-translate-x-8"
          }`}
        >
          {IconOn}
        </div>
      </div>
    </button>
  );
}
