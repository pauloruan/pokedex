export function PokemonTypes({ types }: { types: PokemonSlotType[] }) {
  const typesColors: TypesColors = {
    normal: "bg-gray-300",
    fighting: "bg-red-400",
    flying: "bg-blue-400",
    poison: "bg-purple-400",
    ground: "bg-yellow-400",
    rock: "bg-yellow-600",
    bug: "bg-green-400",
    ghost: "bg-purple-600",
    steel: "bg-gray-600",
    fire: "bg-red-600",
    water: "bg-blue-600",
    grass: "bg-green-600",
    electric: "bg-yellow-200",
    psychic: "bg-pink-400",
    ice: "bg-blue-200",
    dragon: "bg-red-800",
    dark: "bg-gray-800",
    fairy: "bg-pink-200",
    unknown: "bg-gray-400",
    shadow: "bg-gray-400"
  }

  const sortedTypes = [...types].sort((a, b) => a.slot - b.slot)

  return (
    <div className="max-h-max w-full flex flex-row justify-around items-center my-4">
      {sortedTypes.map(({ slot, type }) => (
        <span
          className={`text-xs font-bold rounded-sm h-4 w-20 flex flex-row items-center justify-center py-3 px-4 ${
            typesColors[type.name]
          }`}
          key={slot}
        >
          {type.name}
        </span>
      ))}
    </div>
  )
}
