import React from "react";
import { useRouter } from "next/router";
import WPAPI from "wpapi";
const wp = new WPAPI({ endpoint: `${process.env.CMS_URL}/wp-json` });

export const AppContext = React.createContext({
  locale: process.env.DEFAULT_LANG,
  setLocale: () => null,
});

export const AppProvider = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const [sharedData, setSharedData] = React.useState(null);
  const { query } = useRouter();

  wp.menus = wp.registerRoute("menus/v1", "/menus/(?P<id>[a-zA-Z(-]+)");

  React.useEffect(() => {
    (async () => {
      const [headerMenu] = await Promise.all([
        wp.menus().id("header-menu").param("lang", locale),
      ]);
      setSharedData({ headerMenu });
    })();
  }, []); //trigger on mount only

  React.useEffect(() => {
    if (locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <AppContext.Provider value={{ locale, sharedData, setLocale }}>
      {!sharedData ? null : children}
    </AppContext.Provider>
  );
};
