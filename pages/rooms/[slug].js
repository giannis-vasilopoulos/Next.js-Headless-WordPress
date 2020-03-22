import Layout from "../../components/Layout";

function RoomItem(props) {
  // console.log(props);
  return (
    <Layout>
      <p>This is the blog post content.</p>
    </Layout>
  );
}

RoomItem.getInitialProps = async function({ query }) {
  return {
    query
  };
};

export default RoomItem;
