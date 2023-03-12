import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="PEERANAT - Fullstack Developer" />
          <meta name="description" content="Hey there, This is Peeranat Ounhnana who passionate about Cybersecurity and Cloud Solution Architect. Gold Microsoft Learn Student Ambassador | Mid-level Full Stack Developer | MCT | SEC+, AZ-500, ECSS." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PEERANAT - Fullstack Developer" />
          <meta property="og:description" content="          Hey there, This is Peeranat Ounhnana who passionate about Cybersecurity and Cloud Solution Architect. Gold Microsoft Learn Student Ambassador | Mid-level Full Stack Developer | MCT | SEC+, AZ-500, ECSS." />
          <meta property="og:image" content="/profile.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="PEERANAT - Fullstack Developer" />
          <meta property="twitter:description" content="          Hey there, This is Peeranat Ounhnana who passionate about Cybersecurity and Cloud Solution Architect. Gold Microsoft Learn Student Ambassador | Mid-level Full Stack Developer | MCT | SEC+, AZ-500, ECSS." />
          <meta property="twitter:image" content="/profile.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
