import WPAPI from "wpapi";

const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

// This route is copied from the plugin: wordpress/wp-content/plugins/wp-rest-api-v2-menus/wp-rest-api-v2-menus.php
wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<id>[a-zA-Z(-]+)");

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const [headerMenu, childProps] = await Promise.all([
        wp.menus().id("header-menu"),
        Comp.getInitialProps ? Comp.getInitialProps(args) : {}
      ]);

      return {
        headerMenu,
        ...childProps
      };
    }

    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;
