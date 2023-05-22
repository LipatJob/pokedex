import React from "react";

export default function Sort({ selected, onSortSelected }) {
  return (
    <div className=" flex flex-row gap-3 items-center">
      <label className="text-xl">Sort by</label>
      <select
        className="sort rounded py-2 px-4 text-lg"
        onChange={(e) => onSortSelected(e.currentTarget.value)}
        selected={selected}
      >
        <option value="ID_ASC">ID (Lowest First)</option>
        <option value="ID_DSC">ID (Highest First)</option>
        <option value="NAME_ASC">Name (A to Z)</option>
        <option value="NAME_DSC">Name (Z to A)</option>
      </select>
    </div>
  );
}
