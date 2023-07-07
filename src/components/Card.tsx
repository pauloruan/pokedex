import { usePokemon } from "@hooks/usePokemon"
import Image from "next/image"
import Link from "next/link"
import { Loading } from "./Loading"
import { PokemonTypes } from "./PokemonTypes"

export function Card({ name }: PokemonType) {
  const pokemon = usePokemon(name)

  if (!pokemon) {
    return <Loading />
  }

  return (
    <Link
      href={`/pokemon/${name}`}
      passHref
      target="_self"
      className="h-48 w-52 flex flex-col items-center text-center justify-center space-y-2 rounded-md shadow-xl p-4 bg-slate-400"
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
        alt={pokemon.name}
        priority
        width={400}
        height={400}
        className="w-20 h-20 my-2"
      />
      <h2 className="max-h-max w-full text-base uppercase">
        <span className="text-base">#{pokemon.order}</span> - {name}
      </h2>
      <PokemonTypes types={...pokemon.types} />
    </Link>
  )
}
