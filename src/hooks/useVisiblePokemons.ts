import { useState } from "react"

export function useVisiblePokemons(initialCount: number, increment: number) {
  const [visiblePokemons, setVisiblePokemons] = useState(initialCount)

  function loadMorePokemons() {
    setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + increment)
  }

  return { visiblePokemons, loadMorePokemons }
}
