import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="0xcadams" />
        <meta name="keywords" content="0xcadams" />
        <meta name="robots" content="index,follow" />

        <meta name="title" property="og:title" content="0xcadams" />
        <meta
          name="description"
          property="og:description"
          content="protocol engineer @ livepeer, optimist, learner"
        />

        <meta property="og:site_name" content="0xcadams" />
        <meta property="og:url" content="https://0xcadams.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:alt" content="0xcadams.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@0xcadams" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="canonical" href="https://cadams.io" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
