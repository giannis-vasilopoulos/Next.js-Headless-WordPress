import Layout from "../components/Layout";
import QueryParamLink from "../components/QueryParamLink";
import DynamicLink from "../components/DynamicLink";

export default function Index() {
  return (
    <Layout>
      <h2>My Blog</h2>
      <ul>
        <QueryParamLink title="Hello Next.js" />
        <DynamicLink id="learn-nextjs" />
      </ul>
    </Layout>
  );
}
