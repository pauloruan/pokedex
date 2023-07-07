import { useVisiblePokemons } from "@hooks/useVisiblePokemons"
import { fetchPokemons } from "@services/api"
import { useQuery } from "@tanstack/react-query"
import { LoadMoreButton } from "./LoadMoreButton"
import { Loading } from "./Loading"
import { NotFound } from "./NotFound"
import { PokemonsGrid } from "./PokemonsGrid"

export function HomeContent() {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons
  })

  const INITIAL = 15
  const INCREMENT = 15

  const { visiblePokemons, loadMorePokemons } = useVisiblePokemons(INITIAL, INCREMENT)
  const pokemons = data ? data.results : []
  const renderedPokemons = [...pokemons]
  const paginatedPokemons = renderedPokemons.slice(0, visiblePokemons)
  const isLoadMoreDisabled = paginatedPokemons.length >= renderedPokemons.length

  return (
    <div className="flex flex-col justify-between items-center space-y-8 my-4 mx-auto max-w-max h-full">
      <div className="flex flex-col text-center items-center justify-center bg-slate-300 rounded-md shadow-md min-w-[292px] min-h-[70vh] w-full h-full">
        {isLoading && <Loading />}
        {!data && !isLoading && <NotFound />}
        {data && paginatedPokemons.length >= 1 && (
          <PokemonsGrid pokemons={paginatedPokemons} />
        )}
        <LoadMoreButton onClick={loadMorePokemons} disabled={isLoadMoreDisabled} />
      </div>
    </div>
  )
}
