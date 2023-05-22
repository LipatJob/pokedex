"use client";
import Card from "@/components/Card";
import Sort from "@/components/Sort";
import useAsyncData from "@/utils/useAsyncData";
import { getPokemons } from "@/services/pokemonService";
import { useEffect, useState } from "react";

export default function Home() {
  const pokemons = useAsyncData(getPokemons);
  const [sortBy, setSortBy] = useState("ID_ASC");
  const [filterBy, setFilterBy] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    pokemons.request(filterBy, sortBy, page);
  }, []);

  useEffect(() => {
    pokemons.request(filterBy, sortBy, page);
  }, [filterBy, sortBy, page]);

  return (
    <div className="bg-gray-200 w-full h-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row pt-4 mb-12 items-center">
          <p className="text-4xl">Pokedex</p>
          <div className="ml-auto">
            <Sort selected={sortBy} onSortSelected={setSortBy} />
          </div>
        </div>

        {pokemons.loading && <>Loading</>}
        {pokemons.data && (
          <div className="flex flex-row gap-4 max-w-full flex-wrap">
            {pokemons.data.map((pokemon) => (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                photo={pokemon.photo}
                types={pokemon.types}
              />
            ))}
          </div>
        )}
        {pokemons.error && <>Error: {pokemons.error}</>}
      </div>
    </div>
  );
}
