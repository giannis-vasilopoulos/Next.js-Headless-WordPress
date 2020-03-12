import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Index = ({ pages }) => {
  return (
    <Layout>
      <div className="flex flex-wrap">
        {pages.map(page => (
          <div className="w-1/4" key={page.id}>
            <p>{page.title.rendered}</p>
            <img src="/images/sthlm-square.jpeg" alt="" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function({ query }) {
  const res = await fetch(`${process.env.CMS_URL}/wp-json/wp/v2/pages/?_embed`);
  const data = await res.json();
  return {
    pages: data
  };
};

export default Index;
