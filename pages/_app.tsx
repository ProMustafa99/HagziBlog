import { Josefin_Sans } from 'next/font/google';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./_components/Header";

const jsosefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
});


export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />

    <main className={`bg-[#f5f7fb] h-max`} >
      <Component {...pageProps} />
    </main>
  </>;
}
