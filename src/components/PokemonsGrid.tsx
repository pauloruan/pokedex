import { Card } from "./Card"

export function PokemonsGrid({ pokemons }: { pokemons: PokemonType[] }): JSX.Element {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-4 p-8">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} {...pokemon} />
      ))}
    </div>
  )
}
