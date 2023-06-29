import { AxiosError } from "axios"
import { axiosClient } from "./axiosClient"

export async function fetchPokemons(): Promise<PokemonsResponse> {
  try {
    const { data } = await axiosClient.get<Pokemons>("/pokemon?limit=151")
    return data
  } catch (error) {
    if (error instanceof AxiosError) console.error(error.message)
  }
}

export async function fetchPokemon(id: string): Promise<PokemonResponse> {
  try {
    const { data } = await axiosClient.get<Pokemon>(`/pokemon/${id}`)
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message)
    }
  }
}
