import { typeColorMapping } from "@/utils/Colors";
import { encodePokemonId, encodePokemonName, toTitleCase } from "@/utils/Text";
import React, { useEffect } from "react";
import TypePill from "./TypePill";
import StatBar from "./StatBar";
import useAsyncData from "@/utils/useAsyncData";
import { getPokemonDetails } from "@/services/pokemonService";

export default function PokemonDetails({ id, onClose }) {
  const data = useAsyncData(getPokemonDetails);
  const details = data.data;
  useEffect(() => {
    if (id !== null) {
      data.request(id);
    }
  }, []);

  useEffect(() => {
    if (id !== null) {
      data.request(id);
    }
  }, [id]);
  return (
    <div
      className="pokemonDetails fixed w-full h-full top-0 left-0 flex flex-col justify-center items-center bg-black/25 z-10"
      onClick={(e) => {
        onClose();
      }}
    >
      <div
        className=" sm:w-[600px] relative bg-white mx-auto flex flex-col  rounded-lg shadow-lg z-20 overflow-y-auto my-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 bg-red-600 rounded-lg w-8 h-8 text-white hover:scale-110 transition-all"
        >
          X
        </button>
        {data.loading && <div className="h-20 w-20">Loading</div>}
        {data.data && (
          <div>
            <div
              className="flex"
              style={{ backgroundColor: typeColorMapping[details.types[0]] }}
            >
              <img
                src={details.photo || "./pokemon-icon.png"}
                className="w-[200px] mx-auto p-4"
              />
            </div>
            <div className="p-8 pt-4 flex flex-col gap-6">
              <div className="info flex flex-col items-center">
                <p className="mb-2 text-center">
                  <span className="text-2xl font-bold name">
                    {encodePokemonName(details.name)}{" "}
                  </span>
                  <span className="font-medium id">
                    {encodePokemonId(details.id)}
                  </span>
                </p>
                <div className="types flex flex-row gap-4">
                  {details.types.map((type) => (
                    <TypePill type={type} key={type} />
                  ))}
                </div>
              </div>
              <div className="">
                <p className="font-semibold text-lg mb-3">About</p>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row">
                    <div className="w-24">Height:</div>{" "}
                    <div className="font-semibold height">
                      {details.height} dm
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-24">Weight:</div>{" "}
                    <div className="font-semibold weight">
                      {details.weight} hg
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-24">Abilities:</div>{" "}
                    <div className="font-semibold">
                      {details.abilities.map(toTitleCase).join(", ")}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-lg mb-3">Base Stats</p>
                <div className="flex flex-col gap-2 stats">
                  <StatBar name="hp" label="HP" value={details.stats.hp} />
                  <StatBar
                    name="attack"
                    label="Attack"
                    value={details.stats.attack}
                  />
                  <StatBar
                    name="defense"
                    label="Defense"
                    value={details.stats.defense}
                  />
                  <StatBar
                    name="specialAttack"
                    label="SP Attack"
                    value={details.stats.specialAttack}
                  />
                  <StatBar
                    name="specialDefense"
                    label="SP Defense"
                    value={details.stats.specialDefense}
                  />

                  <StatBar
                    name="speed"
                    label="Speed"
                    value={details.stats.speed}
                  />
                </div>
              </div>

              <div className="weaknesses">
                <p className="font-semibold text-lg mb-3"> Weaknesses</p>
                <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                  {details.weaknesses.map((weakness) => (
                    <TypePill type={weakness} key={weakness} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {data.error && <div className="h-20 w-20">Error: {pokemons.error}</div>}
      </div>
    </div>
  );
}
