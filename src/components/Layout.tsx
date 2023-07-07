import { Roboto_Mono as Roboto } from "next/font/google"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { ScrollToTopButton } from "./ScrollToTopButton"

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  style: "normal",
  weight: ["100", "300", "400", "700"]
})

export function Layout({ children }: RootLayoutProps): JSX.Element {
  return (
    <main
      className={`${roboto.className} bg-slate-200 flex min-h-screen flex-col items-center justify-between p-2`}
    >
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </main>
  )
}
