"use client";
import Card from "@/components/Card";
import Sort from "@/components/Sort";
import useAsyncData from "@/utils/useAsyncData";
import { getPokemons } from "@/services/pokemonService";
import { useEffect, useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import PokemonDetails from "@/components/PokemonDetails";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [sortBy, setSortBy] = useState("ID_ASC");
  const [filterBy, setFilterBy] = useState("");
  const [page, setPage] = useState(1);
  const [detailsOpened, setDetailsOpened] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadNewPage();
    addScrollListener();

    return () => {
      removeScrollListener();
    };
  }, [page, sortBy, filterBy]);

  useEffect(() => {
    setPage(1);
  }, [sortBy, filterBy]);

  const loadNewPage = async () => {
    const newPokemons = await getPokemons(filterBy, sortBy, page);
    if (page === 1) {
      setPokemons(newPokemons);
    } else {
      setPokemons((oldPokemons) => [...oldPokemons, ...newPokemons]);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const addScrollListener = () => {
    window.addEventListener("scroll", handleScroll);
  };

  const removeScrollListener = () => {
    window.removeEventListener("scroll", handleScroll);
  };

  return (
    <div className="bg-slate-100 w-full h-full min-h-[125vh]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row py-6 items-center">
          <p className="text-4xl font-bold">Pokedex</p>
        </div>
        <div className="flex flex-row mb-4">
          <SearchFilter onSubmit={setFilterBy} />
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

        <div className="pokemon-list flex flex-row gap-4 max-w-full flex-wrap justify-center">
          {pokemons.map((pokemon) => (
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
      </div>
    </div>
  );
}
