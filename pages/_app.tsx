import { Josefin_Sans } from 'next/font/google';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./_components/Header";
import Footer from './_components/Footer';
import Head from 'next/head';

const jsosefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
});



export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Head>
      <title> Blog</title>
    </Head>
    
    <Header />

    <main className={`bg-[#f5f7fb] h-max py-[90px]`} >
      <Component {...pageProps} />
    </main>

    <Footer />
  </>;
}
