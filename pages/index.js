import Layout from "../components/Layout";
import React, { Component } from "react";

import WPAPI from "wpapi";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export default class Index extends Component {
  static async getInitialProps() {
    const [pages] = await Promise.all([
      wp
        .pages()
        .embed()
        .perPage(4)
        .page(1)
    ]);

    return { pages };
  }

  render() {
    const { pages } = this.props;
    return (
      <Layout>
        <div className="flex flex-wrap">
          {pages.map(page => (
            <div className="w-1/4" key={page.id}>
              <p>{page.title.rendered}</p>
              <img src="/images/sthlm-square.jpeg" alt="" />
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
