// /pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class NHLStatTrackerDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NHLStatTrackerDocument;
