interface PokemonType {
  name: string
  url: string
}

interface PokemonSlotType {
  slot: number
  type: PokemonType
}

interface Animated {
  front_default: string
}

interface GenerationV {
  "black-white": BlackWhite
}

interface Versions {
  "generation-v": GenerationV
}

interface BlackWhite {
  animated: Animated
}

interface PokemonSprites {
  front_default: string
  versions: Versions
}

interface Ability {
  name: string
  url: string
}

interface PokemonAbility {
  is_hidden: boolean
  slot: number
  ability: Ability
}

interface Form {
  name: string
  url: string
}

interface Version {
  name: string
  url: string
}

interface GameIndice {
  game_index: number
  version: Version
}

interface Item {
  name: string
  url: string
}

interface Version {
  name: string
  url: string
}

interface VersionDetail {
  rarity: number
  version: Version
}

interface HeldItem {
  item: Item
  version_details: Array<VersionDetail>
}

interface Move {
  name: string
  url: string
}

interface VersionGroup {
  name: string
  url: string
}

interface MoveLearnMethod {
  name: string
  url: string
}

interface VersionGroupDetail {
  level_learned_at: number
  version_group: VersionGroup
  move_learn_method: MoveLearnMethod
}

interface PokemonMove {
  move: Move
  version_group_details: Array<VersionGroupDetail>
}

interface Stat {
  name: string
  url: string
}

interface PokemonStat {
  base_stat: number
  effort: number
  stat: Stat
}

type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Array<PokemonAbility>
  forms: Array<Form>
  game_indices: Array<GameIndice>
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Array<PokemonMove>
  species: Species
  sprites: Sprites
  stats: Array<PokemonStat>
  types: Array<PokemonSlotType>
}

type Pokemons = {
  count: number
  next: string | null
  previous: string | null
  results: Array<PokemonType>
}

type PokemonsResponse = Pokemons | undefined

type PokemonResponse = Pokemon | undefined

type TypesColors = {
  [key: string]: string
}

type RootLayoutProps = {
  children: ReactNode
}

type GlobalProviderProps = RootLayoutProps

type GridProps = {
  pokemons: PokemonType[]
}

type LoadMoreButtonProps = {
  onClick: () => void
  disabled: boolean
}
