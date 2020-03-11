import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Fetch = props => {
  return (
    <Layout>
      <h1>Pages</h1>
      <ul>
        {props.pages.map(page => (
          <li key={page.id}>
            <Link href="[page]" as={`${page.slug}`}>
              <a>{page.title.rendered}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Fetch.getInitialProps = async function({ query }) {
  const res = await fetch("http://localhost/wp-json/wp/v2/pages/");
  const data = await res.json();
  return {
    pages: data
  };
};

export default Fetch;
