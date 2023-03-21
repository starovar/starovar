import Document, { Html, Head, Main, NextScript } from 'next/document';
import { initializeTheme } from 'next-themes';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  componentDidMount() {
    initializeTheme();
  }

  render() {
    return (
      <Html className="dark">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
