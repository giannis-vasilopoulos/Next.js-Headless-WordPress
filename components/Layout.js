import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <h1>Headless Wordpress with Next.js</h1>
    {props.children}
  </div>
);

export default Layout;
