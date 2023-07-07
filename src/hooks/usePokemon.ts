import { fetchPokemon } from "@services/api"
import { useEffect, useState } from "react"

export function usePokemon(id: string): Pokemon | undefined {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const data = await fetchPokemon(id)
        setPokemon(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching pokemon:", error)
        setIsLoading(false)
      }
    }

    fetchPokemonData()
  }, [id])

  return isLoading ? undefined : pokemon
}
