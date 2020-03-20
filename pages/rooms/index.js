import Layout from "../../components/Layout";

function HomeItem(props) {
  // console.log(props);
  return (
    <Layout>
      <p>This is the blog post index fkdfsklfskl content.</p>
    </Layout>
  );
}

HomeItem.getInitialProps = async function({ query }) {
  return {
    query
  };
};

export default HomeItem;
