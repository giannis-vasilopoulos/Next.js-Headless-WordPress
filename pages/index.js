import WPAPI from "wpapi";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import GridItem from "../components/grid/grid-item";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import Error from "next/error";
import endpoint from "../components/common/getEndpoint";

class Index extends React.Component {
  static async getInitialProps(context) {
    const { lang } = context.query;
    const wp = new WPAPI({ endpoint: endpoint(lang) });
    wp.rooms = wp.registerRoute("wp/v2", "/rooms/");
    const [home, rooms] = await Promise.all([
      await fetch(
        `${process.env.CMS_URL}/wp-json/wp/v2/pages/?slug=home`
      ).then(res => res.json()),
      wp.rooms().perPage(4)
    ]);

    return { home, rooms };
  }

  render() {
    const { home, rooms, headerMenu } = this.props;
    if (home.length < 1) return <Error statusCode={404} />;
    return (
      <Layout title={home[0].yoast_title} meta={home[0].yoast_meta}>
        <Header menu={headerMenu} />
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
