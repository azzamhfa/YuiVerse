import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <title>YuiVerse</title>
        <link rel="shortcut icon" href="/sakura.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
