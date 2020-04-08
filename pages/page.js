import Error from "next/error";
import WPAPI from "wpapi";

import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import endpoint from "../components/common/getEndpoint";

const Page = ({ page, error }) => {
  if (!page) return <Error statusCode={404} />;
  return (
    <Layout title={page.yoast_title}>
      <h2>{page.title.rendered}</h2>
      <div
        className="mv4"
        dangerouslySetInnerHTML={{
          __html: page.content.rendered,
        }}
      />
    </Layout>
  );
};

Page.getInitialProps = async ({ query, res }) => {
  const { slug, lang } = query;
  const wp = new WPAPI({
    endpoint: endpoint(lang),
  });

  try {
    const page = await wp
      .pages()
      .slug(slug)
      .then((data) => {
        return data[0];
      });

    return { page };
  } catch (err) {
    console.log(err);
    return { error: res.statusCode };
  }
};

export default PageWrapper(Page);
