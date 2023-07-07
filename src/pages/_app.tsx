import "@/styles/globals.css"
import { queryClient } from "@services/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
