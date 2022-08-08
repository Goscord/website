import type { AppProps } from "next/app";
import { ReactElement } from "react";
import Head from "next/head";
import "../lib/styles/globals.css";
import "../lib/styles/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Goscord</title>

        <meta name="description" content="Goscord is a Go package that provides high level bindings to the Discord API." />
        
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}