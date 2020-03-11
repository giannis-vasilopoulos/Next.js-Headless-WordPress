import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <>
    <Head>
      <title>Next.js - WP</title>
    </Head>
    <div style={layoutStyle}>
      <Header />
      <h1>Headless Wordpress with Next.js</h1>
      {props.children}
    </div>
  </>
);

export default Layout;
