import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/vendors/css/vendors.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/bootstrap.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/bootstrap-extended.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/colors.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/components.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/themes/dark-layout.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/themes/semi-dark-layout.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/core/menu/menu-types/vertical-menu.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/app-assets/css/themes/bordered-layout.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script  src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
      </body>
    </Html>
  );
}

