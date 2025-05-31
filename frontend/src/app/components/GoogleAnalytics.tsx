import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S03JE4KNHH"
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S03JE4KNHH');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics; 