import React, { useState } from "react";

export default function SearchFilter({ onSubmit }) {
  const [searchText, setSearchText] = useState();

  function clear() {
    setSearchText("");
    onSubmit("");
  }
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="relative">
        <input
          type="text"
          className="search rounded py-2 px-4 text-lg w-full sm:w-72"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter pokemon name or ID"
        />
        {searchText !== "" && searchText != null && (
          <button
            type="button"
            className="absolute right-3 top-0 h-full flex"
            onClick={clear}
          >
            <p className="my-auto text-slate-500">Clear</p>
          </button>
        )}
      </div>

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
