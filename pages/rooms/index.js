import Layout from "../../components/Layout";

function Rooms(props) {
  // console.log(props);
  return (
    <Layout>
      <p>This is the blog post index.</p>
    </Layout>
  );
}

Rooms.getInitialProps = async function({ query }) {
  return {
    query
  };
};

export default Rooms;
