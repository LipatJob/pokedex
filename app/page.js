"use client";
import Card from "@/components/Card";
import Sort from "@/components/Sort";
import useAsyncData from "@/utils/useAsyncData";
import { getPokemons } from "@/services/pokemonService";
import { useEffect, useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import PokemonDetails from "@/components/PokemonDetails";

export default function Home() {
  const pokemons = useAsyncData(getPokemons);
  const [sortBy, setSortBy] = useState("ID_ASC");
  const [filterBy, setFilterBy] = useState("");
  const [page, setPage] = useState(1);
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    pokemons.request(filterBy, sortBy, page);
  }, []);

  useEffect(() => {
    pokemons.request(filterBy, sortBy, page);
  }, [filterBy, sortBy, page]);

  return (
    <div className="bg-slate-100 w-full h-full min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row py-6 items-center">
          <p className="text-4xl font-bold">Pokedex</p>
        </div>
        <div className="flex flex-row mb-4">
          <SearchFilter onSubmit={(filterText) => setFilterBy(filterText)} />
          <div className="ml-auto">
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
        {pokemons.loading && <div className="h-20 w-20">Loading</div>}
        {pokemons.data && (
          <div className="flex flex-row gap-4 max-w-full flex-wrap justify-center">
            {pokemons.data.map((pokemon) => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                photo={pokemon.photo}
                types={pokemon.types}
                onClick={() => {
                  setSelectedId(pokemon.id);
                  setDetailsOpened(true);
                }}
              />
            ))}
          </div>
        )}
        {pokemons.error && (
          <div className="h-20 w-20">Error: {pokemons.error}</div>
        )}
      </div>
    </div>
  );
}
