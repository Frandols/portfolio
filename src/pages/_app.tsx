import { Footer, Header } from 'components'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Francisco De Los Santos | Web Developer</title>
		</Head>
		<Header />
		<main className='main'>
			<Component {...pageProps} />
		</main>
		<Footer />
	</>
)

export default App
