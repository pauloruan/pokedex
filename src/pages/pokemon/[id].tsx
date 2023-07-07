import { Layout } from "@components/Layout"
import { Loading } from "@components/Loading"
import { PokemonDetails } from "@components/PokemonDetails"
import { usePokemon } from "@hooks/usePokemon"
import { useRouter } from "next/router"

export default function Pokemon(): JSX.Element {
  const router = useRouter()
  const { id } = router.query

  const pokemon = usePokemon(id as string)

  if (!pokemon) {
    return <Loading />
  }

  return (
    <Layout>
      <PokemonDetails {...pokemon} />
    </Layout>
  )
}
