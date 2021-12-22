import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../font.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
