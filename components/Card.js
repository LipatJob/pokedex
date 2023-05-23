import { typeColorMapping } from "@/utils/Colors";
import {
  encodePokemonId,
  encodePokemonName,
  getContrastTextColor,
  toTitleCase,
} from "@/utils/Text";
import Image from "next/image";
import React from "react";
import TypePill from "./TypePill";

export default function Card({ id, name, photo, types, onClick }) {

  return (
    <div
      className="pokemon flex flex-col max-w-[240px] items-center bg-white rounded-lg p-4 hover:-translate-y-2 transition-all hover:shadow-lg cursor-pointer z-0"
      id={id}
      name={name}
      onClick={onClick}
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
          {encodePokemonId(id)}
        </p>
        <p className="name font-semibold text-xl m-0">
          {encodePokemonName(name)}
        </p>
      </div>

      <div className="types flex flex-row gap-4 ">
        {types.map((type) => (
          <TypePill type={type} key={type}/>
        ))}
      </div>
    </div>
  );
}
