import WPAPI from "wpapi";
import Layout from "../components/Layout";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

class Page extends React.Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    // console.log(slug);
    const page = await wp
      .pages()
      .slug(slug)
      .then(data => {
        return data[0];
      });

    return { page };
  }

  render() {
    const { page } = this.props;
    if (!page) return <Error statusCode={404} />;
    return (
      <Layout title={page.yoast_title}>
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

export default Page;
