import React, { Component } from "react";
import WPAPI from "wpapi";

import Layout from "../components/Layout";
import GridItem from "../components/grid/grid-item";

const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export default class Index extends Component {
  static async getInitialProps() {
    const [pages] = await Promise.all([wp.pages().perPage(4)]);

    return { pages };
  }

  render() {
    const { pages } = this.props;
    return (
      <Layout>
        <div className="flex flex-wrap">
          {pages.map(page => (
            <GridItem page={page} key={page.id} />
          ))}
        </div>
      </Layout>
    );
  }
}
