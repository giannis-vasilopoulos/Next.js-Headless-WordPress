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
    const page = await wp
      .pages()
      .slug(slug)
      .then(data => {
        return data[0];
      });

    return { page };
  }

  render() {
    const { page, headerMenu } = this.props;
    if (!page) return <Error statusCode={404} />;
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
