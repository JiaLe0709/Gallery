import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import app from '../app.config'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={app.icon} />
          <meta
            name="description"
            content={app.desc}
          />
          <meta property="og:site_name" content={app.domain} />
          <meta
            property="og:description"
            content={app.desc}
          />
          <meta property="og:title" content={app.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={app.title} />
          <meta
            name="twitter:description"
            content={app.desc}
          />
          {app.analytics && app.analytics.provider === 'umami' && (
            <Script
              src={app.analytics.umamiConfig.scriptUrl}
              strategy='afterInteractive'
              data-website-id={app.analytics.umamiConfig.websiteId}
            />
          )}
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
