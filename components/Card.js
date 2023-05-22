import {
  encodePokemonName,
  getContrastTextColor,
  toTitleCase,
} from "@/utils/Text";
import Image from "next/image";
import React from "react";

export default function Card({ id, name, photo, types }) {
  const typeColorMapping = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33EA1",
    ground: "#E2BF65",
    rock: "#B6A136",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
    unknown: "#777",
    shadow: "#777",
  };
  return (
    <div
      className="pokemon flex flex-col max-w-[300px] items-center bg-white rounded-lg p-4 hover:-translate-y-2 transition-all hover:shadow-lg"
      id={id}
      name={name}
    >
      {/* https://pixabay.com/vectors/pokemon-icon-design-symbol-sign-4657023/ */}
      <img
        src={photo || "./pokemon-icon.png"}
        alt={`Image of ${name}`}
        className="photo w-full h-auto mb-4 bg-slate-100 rounded-lg p-4"
        width="200"
        height="200"
      />
      <div className="flex flex-col items-center mb-2">
        <p className="id font-medium text-xs m-0">
          {"#" + String(id).padStart(4, "0")}
        </p>
        <p className="name font-semibold text-xl m-0">
          {encodePokemonName(name)}
        </p>
      </div>

      <div className="types flex flex-row gap-4 ">
        {types.map((type) => (
          <div
            key={type}
            className="w-24 border-2 py-1 px-2 rounded-lg text-center"
            style={{ backgroundColor: typeColorMapping[type] }}
          >
            <p style={{ color: getContrastTextColor(typeColorMapping[type]) }}>
              {toTitleCase(type)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
