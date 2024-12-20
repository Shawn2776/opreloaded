"use client";

import EList from "@/components/EList";
import EquipmentFiltersOptions from "@/components/EquipmentFiltersOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import { getEquipmentList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [equipList, setEquipList] = useState([]);
  const [equipOrigList, setEquipOrigList] = useState([]);

  useEffect(() => {
    getEquipment();
  }, []);

  const getEquipment = async () => {
    const result = await getEquipmentList();
    setEquipList(result?.equipmentLists);
    setEquipOrigList(result?.equipmentLists);
  };

  const filterEquipList = (season) => {
    const filterList = equipOrigList.filter((item) => item.season == season);

    setEquipList(filterList);
  };

  return (
    <main className="">
      <Hero />
      <SearchInput />
      <EquipmentFiltersOptions
        eList={equipOrigList}
        setSeason={(value) => console.log(value)}
      />
      <EList eList={equipList} />
    </main>
  );
}
