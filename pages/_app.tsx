import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../firebase/firebase.ts';
import 'bootswatch/dist/superhero/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
