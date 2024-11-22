"use client";

const EquipmentFiltersOptions = () => {
  return (
    <div className="flex items-center justify-between pt-10 mx-auto mt-10 max-w-7xl">
      <div>
        <h2 className="text-[30px] font-bold">Equipment Catalog</h2>
        <h2>Explore Equipment You Might Like</h2>
      </div>
      <div className="flex gap-5">
        <select className="w-full max-w-xs bg-white select select-bordered">
          <option disabled>Price</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select className="hidden w-full max-w-xs bg-white select select-bordered md:block">
          <option disabled>Type</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default EquipmentFiltersOptions;
