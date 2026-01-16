"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

import Header from "@/src/components/organisms/Header";
import { Item } from "@/src/types/item";

interface HomeClientProps {
  getItemsShop: () => Promise<Item[]>;
}

export default function HomeClient({ getItemsShop }: HomeClientProps) {
  const [gender, setGender] = useState<string>("");
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemsShop().then((data) => {
      setItems(data);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredItems = items.filter(
    (item) => !gender || item.gender === gender
  );

  return (
    <>
      <Header
        gender={gender}
        isZoom={isZoom}
        onGenderChange={(gender) =>
          setGender((prev) => (prev === gender ? "" : gender))
        }
        onZoomChange={setIsZoom}
      />
      <FaShoppingCart className="fixed bottom-4 right-4 w-8 h-8" />
      <main
        className={`grid w-full gap-4 max-w-360 mx-auto px-4 ${
          isZoom ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 aspect-square rounded-lg mb-2" />
                <div className="bg-gray-300 h-4 rounded w-3/4 mb-2" />
                <div className="bg-gray-300 h-4 rounded w-1/2" />
              </div>
            ))
          : filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="border rounded-lg p-4">
                  <Image
                    src={`/product.png`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full aspect-square object-cover rounded mb-2 drop-shadow-md drop-shadow-black dark:drop-shadow-gray-700"
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ${item.price}
                  </p>
                </div>
              </motion.div>
            ))}
      </main>
    </>
  );
}
