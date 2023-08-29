import type { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/globals.css'
import ts from '../package.json'
import BirthdayBanner from '../components/Extra/BirthdayBanner'
// import Navbar from '../components/Navbar/Header'
// import app from '../app.config'

const t = ts.version || "Unknown";

console.log(`%c Jia Le's Gallery %c ${t} %c https://github.com/JiaLe0709/Gallery`, "color: #fff; background: #5f5f5f", "color: #fff; background: #44CC11", "")
console.log(`🚧 If Got Any Bugs or Issues, You can always submit a new issues. https://github.com/JiaLe0709/Gallery/issues/new`)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <BirthdayBanner/>
      {/*<Navbar navBarTitle={app.title} fullWidth={undefined} />*/}
      <Component {...pageProps} />
    </>
  )
}
