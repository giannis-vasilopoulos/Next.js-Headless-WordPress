import Document, { Html, Head, Main, NextScript } from "next/document";
import { LocaleContext } from "../context/LocaleContext";
class NextDocument extends Document {
  static contextType = LocaleContext;

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { locale } = this.context;
    return (
      <Html lang={locale}>
        <Head />
        <body className={`next-${locale} container`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;
