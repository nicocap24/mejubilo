import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Meta tag verification */}
        <meta name="google-adsense-account" content="ca-pub-5179832879235237" />
        
        {/* AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5179832879235237"
          crossOrigin="anonymous"
        />
        
        {/* AdSense Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.adsbygoogle = window.adsbygoogle || [];
                window.adsbygoogle.push({
                  google_ad_client: "ca-pub-5179832879235237",
                  enable_page_level_ads: true
                });
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 