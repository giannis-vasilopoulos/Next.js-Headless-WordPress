import Layout from "../../components/Layout";
import PageWrapper from "../components/PageWrapper";

function RoomItem(props) {
  // console.log(props);
  return (
    <Layout>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

RoomItem.getInitialProps = async function ({ query }) {
  return {
    query,
  };
};

export default PageWrapper(RoomItem);
