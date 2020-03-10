import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Page = props => {
  console.log(props);
  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
};

Page.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(context);
  const res = await fetch(`http://localhost/wp-json/wp/v2/pages/${id}`);
  const page = await res.json();

  console.log(page);

  return { page };
};

export default Page;
