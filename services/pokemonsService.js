const getPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();
  const pokemonsResponse = await Promise.all(
    data.results.map(async (e) => {
      const res = await fetch(e.url);
      return res.json();
    })
  );
  const pokemons = pokemonsResponse.map((e) => ({
    id: e.id,
    name: e.name,
    photo: e.sprites.other["official-artwork"].front_default,
    types: e.types.map((f) => f.type.name),
  }));
  return pokemons;
};

export { getPokemons };
