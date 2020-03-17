import React, { Component } from "react";
import WPAPI from "wpapi";

import Layout from "../components/Layout";
import GridItem from "../components/grid/grid-item";

const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export default class Index extends Component {
  static async getInitialProps() {
    const [home, pages] = await Promise.all([
      wp
        .pages()
        .slug("home")
        .then(data => {
          return data[0];
        }),
      wp.pages().perPage(4)
    ]);

    return { home, pages };
  }

  render() {
    const { home, pages } = this.props;
    return (
      <Layout title={home.yoast_title} meta={home.yoast_meta}>
        <div className="flex flex-wrap">
          {pages.map(page => (
            <GridItem page={page} key={page.id} />
          ))}
        </div>
      </Layout>
    );
  }
}
