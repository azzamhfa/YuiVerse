import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <title>YuiVerse</title>
        <link rel="shortcut icon" href="/sakura.ico" />
        <meta property="og:title" content="🌸YuiVerse" key="title" />
        <meta
          name="description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yuiverse.vercel.app/" />
        <meta
          property="og:description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="og:image" content="./meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yuiverse.vercel.app/" />
        <meta property="twitter:title" content="🌸YuiVerse" />
        <meta
          property="twitter:description"
          content="YuiVerse is a Kobayashi Yui Landing Page Website. This page is non-profit, not affiliated with anyone / groups, and it's fan-made that for Educational Purpose Only"
        />
        <meta property="twitter:image" content="./meta.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
