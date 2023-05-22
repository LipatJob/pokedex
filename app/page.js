"use client";
import Card from "@/components/Card";
import useAsyncData from "@/lib/useAsyncData";
import { getPokemons } from "@/services/pokemonsService";
import { useEffect } from "react";

export default function Home() {
  const pokemons = useAsyncData(getPokemons);

  useEffect(() => {
    pokemons.request();
  }, []);

  return (
    <div className="bg-slate-200 w-full h-full">
      <div className="max-w-screen-xl mx-auto">
        Pokemons
        {pokemons.loading && <>Loading</>}
        {pokemons.data && (
          <div className="flex flex-row gap-4 max-w-full flex-wrap">
            {pokemons.data.map((pokemon) => (
              <div
                className="hover:-translate-y-2 transition-all hover:shadow-lg"
                key={pokemon.id}
              >
                <Card
                  id={pokemon.id}
                  name={pokemon.name}
                  photo={pokemon.photo}
                  types={pokemon.types}
                />
              </div>
            ))}
          </div>
        )}
        {pokemons.error && <>Error</>}
      </div>
    </div>
  );
}
