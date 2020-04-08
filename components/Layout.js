import { useContext } from "react";
import { AppContext } from "../context/Context";
import Head from "next/head";
import Header from "./Header";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = ({ children, title = "Home", meta }) => {
  const { sharedData } = useContext(AppContext);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>{`${title}`}</title>

        {/*'TODO loop meta data'*/}

        <link
          rel="icon"
          href={require("../public/icons/favicon.ico")}
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href={require("../public/icons/favicon-16x16.png")}
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href={require("../public/icons/favicon-32x32.png")}
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href={require("../public/icons/apple-touch-icon.png")}
        ></link>
        <meta name="theme-color" content="#303030" />
      </Head>
      <main style={layoutStyle}>
        <Header menu={sharedData.headerMenu} />
        {children}
      </main>
    </>
  );
};

export default Layout;
