import Error from "next/error";
import WPAPI from "wpapi";

import Layout from "../components/Layout";
import GridItem from "../components/grid/grid-item";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import endpoint from "../components/common/getEndpoint";

class Index extends React.Component {
  static async getInitialProps(context) {
    const { lang } = context.query;
    const wp = new WPAPI({ endpoint: endpoint(lang) });
    wp.rooms = wp.registerRoute("wp/v2", "/rooms/");
    wp.frontpage = wp.registerRoute("wp/v2", "/frontpage/");
    try {
      const [home, rooms] = await Promise.all([
        wp.frontpage(),
        wp
          .rooms()
          .perPage(4)
          .order("desc")
          .orderby("date")
      ]);
      return { home, rooms };
    } catch (err) {
      return null;
    }
  }

  render() {
    const { home, rooms, headerMenu } = this.props;
    if (!home) return <Error statusCode={404} />;
    return (
      <Layout title={home.yoast_title} meta={home.yoast_meta}>
        <Header menu={headerMenu} />
        <div className="home-section">
          <div
            dangerouslySetInnerHTML={{
              __html: home.content.rendered
            }}
          />
        </div>
        <div className="flex flex-wrap">
          {rooms.map(room => (
            <GridItem room={room} key={room.id} />
          ))}
        </div>
      </Layout>
    );
  }
}
export default PageWrapper(Index);
