"use client";

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Header from "@/src/components/organisms/Header";

export default function HomeClient() {
  const [gender, setGender] = useState<string>("");
  const [isZoom, setIsZoom] = useState<boolean>(true);

  return (
    <main>
      <Header
        gender={gender}
        isZoom={isZoom}
        onGenderChange={(gender) =>
          setGender((prev) => (prev === gender ? "" : gender))
        }
        onZoomChange={setIsZoom}
      />
      <FaShoppingCart className="fixed bottom-4 right-4 w-8 h-8" />
    </main>
  );
}
