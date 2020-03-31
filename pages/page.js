import Error from "next/error";
import WPAPI from "wpapi";

import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import endpoint from "../components/common/getEndpoint";

class Page extends React.Component {
  static async getInitialProps(context) {
    const { slug, lang } = context.query;
    const wp = new WPAPI({
      endpoint: endpoint(lang)
    });
    try {
      const page = await wp
        .pages()
        .slug(slug)
        .then(data => {
          return data[0];
        });

      return { page };
    } catch (err) {
      return { err };
    }
  }

  render() {
    const { page, headerMenu, err } = this.props;
    if (err) return <Error statusCode={err.data.status} />;
    return (
      <Layout title={page.yoast_title}>
        <Header menu={headerMenu} />
        <h2>{page.title.rendered}</h2>
        <div
          className="mv4"
          dangerouslySetInnerHTML={{
            __html: page.content.rendered
          }}
        />
      </Layout>
    );
  }
}

export default PageWrapper(Page);
