import axios, { AxiosError } from "axios"

const BASE_URL = "https://pokeapi.co/api/v2"

const axiosClient = axios.create({
  baseURL: BASE_URL
})

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
