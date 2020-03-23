import React from "react";
import { useRouter } from "next/router";

export const LocaleContext = React.createContext({
  locale: "en",
  setLocale: () => null
});

export const LocaleProvider = ({ lang, children }) => {
  const [locale, setLocale] = React.useState(lang);
  const { query } = useRouter();

  React.useEffect(() => {
    if (locale !== query.lang) {
      setLocale(query.lang);
    }
  }, [query.lang, locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
