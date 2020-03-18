import React, { Component } from "react";
import Error from "next/error";
import WPAPI from "wpapi";
import Layout from "../components/Layout";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export default class Page extends Component {
  static async getInitialProps(context) {
    console.log(context.query);
    const { slug } = context.query;

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
      <Layout title={post.yoast_title}>
        <h2>{post.title.rendered}</h2>
        <div
          className="mv4"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </Layout>
    );
  }
}
