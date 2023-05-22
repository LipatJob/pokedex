import React, { useState } from "react";

export default function SearchFilter({ onSubmit }) {
  const [searchText, setSearchText] = useState();
  return (
    <div className="flex flex-row gap-3 items-center">
      <label className="text-xl">Search</label>
      <input
        type="text"
        className="search sort rounded py-2 px-4 text-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="submit-search bg-red-500 py-2 px-4 rounded text-white"
        type="button"
        onClick={() => onSubmit(searchText)}
      >
        Search
      </button>
    </div>
  );
}
