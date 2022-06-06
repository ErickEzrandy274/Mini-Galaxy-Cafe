import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Mini Galaxy Cafe</title>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
                />
                <link rel ="icon" href ="/gal-logo.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
