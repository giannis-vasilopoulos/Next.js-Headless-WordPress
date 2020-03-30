import Link from "next/link";
import getSlug from "../components/common/getSlug";
import { useContext } from "react";

import { LocaleContext } from "../context/LocaleContext";

const Menu = ({ menu }) => {
  const { locale } = useContext(LocaleContext);
  return (
    <>
      <Link
        as={`/${locale != process.env.DEFAULT_LANG ? locale : ""}`}
        href={`/?slug=home&lang=${locale}`}
      >
        <a className="link__item text-blue-500 no-underline">Home</a>
      </Link>
      {menu.items.map(item => {
        const path = getSlug(item.url);

        if (item.object === "custom") {
          return (
            <a className="link__item" href={item.url} key={item.ID}>
              {item.title}
            </a>
          );
        }

        const actualPage = item.object === "rooms" ? "rooms" : "page";
        return (
          <Link
            as={`${path}`}
            href={`/${actualPage}?slug=${item.slug}&lang=${locale}`}
            key={item.ID}
          >
            <a className="link__item">{item.title}</a>
          </Link>
        );
      })}

      <style jsx>{`
        .link__item {
          color: green;
          margin-right: 15px;
        }
      `}</style>
    </>
  );
};

export default Menu;
