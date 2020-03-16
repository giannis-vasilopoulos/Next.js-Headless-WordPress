import React, { Component } from "react";
import Error from "next/error";
import WPAPI from "wpapi";
import Layout from "../components/Layout";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export default class Page extends Component {
  static async getInitialProps(context) {
    const { page: slug } = context.query;

    const post = await wp
      .pages()
      .slug(slug)
      .then(data => {
        return data[0];
      });

    return { post };
  }

  render() {
    const { post } = this.props;
    if (!post) return <Error statusCode={404} />;
    return (
      <Layout title={post.title.rendered}>
        <h2>{post.title.rendered}</h2>
        <p>{post.content.rendered.replace(/<[/]?[pb]>/g, "")}</p>
      </Layout>
    );
  }
}
