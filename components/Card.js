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
      className="flex flex-col max-w-[200px] items-center bg-white pokemon rounded-lg p-4"
      id={name}
    >
      <img
        src={photo}
        alt={`Image of ${name}`}
        className="photo w-full h-auto"
        width="200"
        height="200"
      />
      <p className="id">{"#" + String(id).padStart(4, "0")}</p>
      <p className="name font-semibold text-xl">{name}</p>
      <div className="types flex flex-row gap-4 ">
        {types.map((type) => (
          <div
            key={type}
            className={` border-2 py-1 px-2 rounded-lg`}
            style={{ borderColor: typeColorMapping[type] }}
          >
            <p>{type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
