"use client";

import EList from "@/components/EList";
import EquipmentFiltersOptions from "@/components/EquipmentFiltersOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getEquipmentList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [equipList, setEquipList] = useState([]);

  useEffect(() => {
    getEquipment();
  }, []);

  const getEquipment = async () => {
    const result = await getEquipmentList();
    console.log("RESULT:", result);
    setEquipList(result?.equipmentLists);
  };

  return (
    <main className="p-4 mx-auto sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <EquipmentFiltersOptions />
      <EList eList={equipList} />
    </main>
  );
}
