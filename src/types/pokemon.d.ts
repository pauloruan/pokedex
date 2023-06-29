interface PokemonType {
  name: string
  url: string
}

interface PokemonSlotType {
  slot: number
  type: PokemonType
}

interface Animated {
  front_default: string;
}

interface GenerationV {
  "black-white": BlackWhite;
}

interface Versions {
  "generation-v": GenerationV;
}

interface BlackWhite {
  animated: Animated;
}

interface PokemonSprites {
  front_default: string,
  versions: Versions
}

type Pokemon = {
  height: number
  id: number
  name: string
  order: number
  weight: number
  sprites: PokemonSprites
  types: Array<PokemonSlotType>
}
