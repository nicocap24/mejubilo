import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Meta tag verification */}
        <meta name="google-adsense-account" content="ca-pub-5179832879235237" />
        <meta name="google-adsense-verification" content="ca-pub-5179832879235237" />
        
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
                try {
                  window.adsbygoogle = window.adsbygoogle || [];
                  window.adsbygoogle.push({
                    google_ad_client: "ca-pub-5179832879235237",
                    enable_page_level_ads: true,
                    overlays: {bottom: true}
                  });
                  console.log('AdSense initialized successfully');
                } catch (e) {
                  console.error('AdSense initialization error:', e);
                }
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Fallback AdSense Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.adsbygoogle) {
                var script = document.createElement('script');
                script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5179832879235237';
                script.async = true;
                script.crossOrigin = 'anonymous';
                document.head.appendChild(script);
              }
            `,
          }}
        />
      </body>
    </Html>
  )
} 