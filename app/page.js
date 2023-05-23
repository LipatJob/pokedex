"use client";
import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { useEffect, useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import PokemonDetails from "@/components/PokemonDetails";
import PokemonList from "@/components/PokemonList";

export default function Home() {
  const [sortBy, setSortBy] = useState("ID_ASC");
  const [filterBy, setFilterBy] = useState("");
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function reset() {
    setSortBy("ID_ASC");
    setFilterBy("");
  }

  return (
    <div className="bg-slate-100 w-full h-full min-h-[105vh] main-content">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div
          className="flex flex-row py-6 items-center gap-3 cursor-pointer"
          onClick={reset}
        >
          <img src="/pokemon.png" className="h-10 w-auto" />
          <p className="text-4xl font-bold">Pokedex</p>
        </div>
        <div className="flex flex-col sm:flex-row mb-4 gap-4">
          <SearchFilter onSubmit={setFilterBy} />
          <div className="sm:ml-auto">
            <Sort selected={sortBy} onSortSelected={setSortBy} />
          </div>
        </div>
        {detailsOpened && (
          <div className="z-10">
            <PokemonDetails
              id={selectedId}
              onClose={() => setDetailsOpened(false)}
            />
          </div>
        )}
        <PokemonList
          sortBy={sortBy}
          filterBy={filterBy}
          setSelectedId={(id) => {
            setSelectedId(id);
            setDetailsOpened(true);
          }}
        />
      </div>
    </div>
  );
}
