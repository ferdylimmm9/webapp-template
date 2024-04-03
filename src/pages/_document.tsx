import { Html, Head, Main, NextScript } from 'next/document';

import resetStyle from '@/common/constants/reset-style';

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <title>Webapp Template</title>
      <Head>
        <meta charSet="utf-8" />
        {/* KEYWORDS */}
        <meta name="title" content="webapp-template" />
        <meta
          name="description"
          content="A Solid Foundation for Building Scalable and Efficient Progressive Web Application!"
        />
        <meta
          name="keywords"
          content="Next.js, pwa, React, HTML, CSS, JavaScript, TypeScript, cats, facts, breeds"
        />
        {/* THEMES */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Webapp Template" />
        <meta name="application-name" content="Webapp Template" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* ICONS */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        {/* OG TAGS */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nextjs-pwa-template-repo.vercel.app"
        />
        <meta
          property="og:title"
          content="The Next.js Progressive Web App Template"
        />
        <meta
          property="og:description"
          content="A Solid Foundation for Building Scalable and Efficient Progressive Web Application!"
        />
        <meta
          property="og:image"
          content="https://nextjs-pwa-template-repo.vercel.app/icons/og-image.png"
        />
        <style>{resetStyle}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
