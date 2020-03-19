import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = ({ children, title = "Home", meta }) => {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </Head>
      <main style={layoutStyle}>{children}</main>
    </>
  );
};

export default Layout;
