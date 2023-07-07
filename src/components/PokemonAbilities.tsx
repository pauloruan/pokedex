export function PokemonAbilities({ abilities }: { abilities: PokemonAbility[] }) {
  const sortedAbilities = [...abilities].sort((a, b) => a.slot - b.slot)

  return (
    <div className="max-h-max w-full flex flex-row justify-around items-center">
      {sortedAbilities.map(({ slot, ability }) => (
        <p
          className="text-xs font-bold rounded-sm h-4 w-20 flex flex-row items-center justify-center py-2"
          key={slot}
        >
          {ability.name}
        </p>
      ))}
    </div>
  )
}
