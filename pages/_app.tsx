import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import '../styles/index.css'
import '../styles/globals.css'
import pkg from '../package.json'
import BirthdayBanner from '../components/Extra/BirthdayBanner'
import Navbar from '../components/Navbar/Nav'
// import app from '../app.config'

const ver = pkg.version || "Unknown";

console.log(`%c Gallery %c ${ver} %c https://github.com/JiaLe0709/Gallery`, "color: #fff; background: #5f5f5f", "color: #fff; background: #44CC11", "")
console.log(`🚧 If Got Any Bugs or Issues, You can always submit a new issues. https://github.com/JiaLe0709/Gallery/issues/new`)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BirthdayBanner />
      <NextUIProvider>
        <NextThemesProvider>
          <Navbar />
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
