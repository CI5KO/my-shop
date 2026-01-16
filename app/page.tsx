"use server";

import { getItemsShop } from "@/src/actions/index.action";
import HomeClient from "./HomeClient";

export default async function Home() {
  return <HomeClient getItemsShop={getItemsShop} />;
}
