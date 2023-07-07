import Link from "next/link"

export function Navbar(): JSX.Element {
  return (
    <header className="box-border w-full h-20 flex flex-row flex-nowrap items-start justify-start text-start font-sans p-2">
      <Link
        href="/"
        passHref
        className="text-3xl font-black text-slate-700 hover:text-slate-500 transition-all duration-300 ease-in-out"
      >
        Pokedex
      </Link>
    </header>
  )
}
