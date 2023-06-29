import { Roboto_Mono as Roboto } from "next/font/google"
import Image from "next/image"

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" })

export default function Home() {
  return (
    <main
      className={`bg-slate-200 flex min-h-screen flex-col items-center justify-between p-2 ${roboto.className}`}
    >
      <h1>Pokedex</h1>
    </main>
  )
}
