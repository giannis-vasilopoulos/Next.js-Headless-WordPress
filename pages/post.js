import { useRouter, withRouter } from "next/router";
import Layout from "../components/Layout";

const Page = () => {
  const router = useRouter();
  return (
    <Layout>
      <h3>query param value is -> {router.query.title}</h3>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
