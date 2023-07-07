import Image from "next/image"
import { PokemonAbilities } from "./PokemonAbilities"
import { PokemonStats } from "./PokemonStats"
import { PokemonTypes } from "./PokemonTypes"

export function PokemonDetails(pokemon: Pokemon) {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-slate-300 rounded-md shadow-md min-w-[292px] min-h-[50vh] w-full h-full md:flex-row max-w-4xl">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
        alt={pokemon.name}
        priority
        width={400}
        height={400}
        className="w-20 h-20 m-4 md:w-40 md:h-40 md:m-8"
      />
      <div className="flex flex-col w-full h-full max-w-xl">
        <h2 className="max-h-max w-full text-base uppercase">
          <span className="text-base">#{pokemon.order}</span> - {pokemon.name}
        </h2>
        <PokemonTypes types={...pokemon.types} />
        <div className="flex flex-col justify-around items-start text-start space-y-2">
          <p className="text-sm font-normal">Height: {pokemon.height}</p>
          <p className="text-sm font-normal">Weight: {pokemon.weight}</p>
          <p className="text-sm font-normal">
            Base Experience: {pokemon.base_experience}
          </p>
          <div className="flex flex-row justify-around items-center text-center w-full text-sm font-normal">
            <p>Abilities: </p>
            <PokemonAbilities abilities={...pokemon.abilities} />
          </div>
        </div>
        <PokemonStats stats={...pokemon.stats} />
      </div>
    </div>
  )
}
