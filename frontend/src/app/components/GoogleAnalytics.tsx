import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-G1T9SRFV67"
        async
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1T9SRFV67');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 