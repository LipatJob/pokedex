import { pipe } from "@/utils/Functional";
import { toTitleCase } from "@/utils/Text";

const getPokemons = async (filterBy, sortBy, page) => {
  const pokemons = hasPokemonCache()
    ? getPokemonsFromCache()
    : await fetchAndCachePokemons();
  return pipe(
    (e) => filter(e, filterBy),
    (e) => sort(e, sortBy),
    (e) => paginate(e, page)
  )(pokemons);
};

const filter = (pokemons, filter) => {
  return pokemons;
};

const sort = (pokemons, sortBy) => {
  const comparator = {
    NAME_ASC: (a, b) => a.name.localeCompare(b.name),
    NAME_DSC: (a, b) => b.name.localeCompare(a.name),
    ID_ASC: (a, b) => a.id - b.id,
    ID_DSC: (a, b) => b.id - a.id,
  }[sortBy];
  pokemons.sort(comparator);
  return pokemons;
};

const paginate = (pokemons, page) => {
  const page_size = 10;
  return pokemons.slice((page - 1) * page_size, page * page_size);
};

const fetchAllPokemons = async () => {
  const listRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1281");
  const listData = await listRes.json();
  console.log(listRes);

  const detailsRes = await Promise.all(
    listData.results.map(async (e) => {
      const res = await fetch(e.url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
  );
  return detailsRes.map((e) => ({
    id: e.id,
    name: e.name,
    photo:
      e.sprites.other["official-artwork"].front_default ||
      e.sprites.front_default,
    types: e.types.map((f) => f.type.name),
  }));
};

const fetchAndCachePokemons = async () => {
  const pokemons = await fetchAllPokemons();
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
  return pokemons;
};

const hasPokemonCache = () => {
  return localStorage.getItem("pokemons") !== null;
};

const getPokemonsFromCache = () => {
  return JSON.parse(localStorage.getItem("pokemons"));
};

export { getPokemons };
