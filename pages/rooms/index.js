import Layout from "../../components/Layout";
import PageWrapper from "../../components/PageWrapper";
function Rooms(props) {
  return (
    <Layout>
      <p>This is the blog post index.</p>
    </Layout>
  );
}
Rooms.getInitialProps = async ({ query, res }) => {
  return {
    query,
  };
};

export default PageWrapper(Rooms);
