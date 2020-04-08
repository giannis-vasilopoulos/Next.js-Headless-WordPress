import { AppProvider } from "../context/Context";

const PageWrapper = (Comp) =>
  class extends React.Component {
    static async getInitialProps(context) {
      const { lang } = context.query;
      const [childProps] = await Promise.all([
        Comp.getInitialProps ? Comp.getInitialProps(context) : {},
      ]);

      return {
        lang,
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
