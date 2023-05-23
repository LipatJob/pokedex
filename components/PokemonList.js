import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getPokemons } from "@/services/pokemonService";

export default function PokemonList({ sortBy, filterBy, setSelectedId }) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    addScrollListener();
    return () => {
      removeScrollListener();
    };
  }, [[page]]);

  useEffect(() => {
    loadNewPage();
  }, [page, sortBy, filterBy]);

  useEffect(() => {
    setPage(1);
  }, [sortBy, filterBy]);

  const loadNewPage = async () => {
    setIsLoading(true);
    const { data: newPokemons, pageCount: newPageCount } = await getPokemons(
      filterBy,
      sortBy,
      page
    );
    setPageCount(newPageCount);
    if (page === 1) {
      setPokemons(newPokemons);
    } else {
      setPokemons((oldPokemons) => [...oldPokemons, ...newPokemons]);
    }
    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      nextPage();
    }
  };

  const nextPage = () => {
    if (page < pageCount) {
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
    <div>
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
            }}
          />
        ))}
      </div>
      {!isLoading && pokemons.length == 0 && (
        <div className="text-center my-10">
          <p className="text-2xl text-slate-500">
            Looks like there are no Pokemons here
          </p>
        </div>
      )}
      {page < pageCount && (
        <div className="text-center my-10">
          <p className="text-2xl text-slate-500">
            Scroll down to load more Pokemons
          </p>
        </div>
      )}
    </div>
  );
}
