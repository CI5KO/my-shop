"use server";

import { Item } from "../types/item";

export async function getItemsShop(): Promise<Item[]> {
  return [
    {
      id: "1",
      name: "Producto 1",
      gender: "male",
      description: "Producto",
      price: 100,
    },
    {
      id: "2",
      name: "Producto 2",
      gender: "female",
      description: "Producto",
      price: 200,
    },
    {
      id: "3",
      name: "Producto 3",
      gender: "male",
      description: "Producto",
      price: 300,
    },
    {
      id: "4",
      name: "Producto 4",
      gender: "female",
      description: "Producto",
      price: 400,
    },
    {
      id: "5",
      name: "Producto 5",
      gender: "male",
      description: "Producto",
      price: 500,
    },
    {
      id: "6",
      name: "Producto 6",
      gender: "female",
      description: "Producto",
      price: 600,
    },
  ];
}
