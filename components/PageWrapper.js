import WPAPI from "wpapi";
import { AppProvider } from "../context/Context";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

// This route is copied from the plugin: wordpress/wp-content/plugins/wp-rest-api-v2-menus/wp-rest-api-v2-menus.php
wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<id>[a-zA-Z(-]+)");

const PageWrapper = (Comp) =>
  class extends React.Component {
    static async getInitialProps(context) {
      const { lang } = context.query;
      const [headerMenu, childProps] = await Promise.all([
        wp.menus().id("header-menu").param("lang", lang),
        Comp.getInitialProps ? Comp.getInitialProps(context) : {},
      ]);

      return {
        lang,
        headerMenu,
        ...childProps,
      };
    }

    render() {
      let { lang, ...childProps } = this.props;
      return (
        <AppProvider lang={lang}>
          <Comp {...childProps} />
        </AppProvider>
      );
    }
  };

export default PageWrapper;
