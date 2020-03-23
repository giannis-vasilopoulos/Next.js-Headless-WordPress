import Link from "next/link";
import getSlug from "../components/common/getSlug";

import HeaderStyles from "../styles/modules/Header.module.scss";

const Menu = ({ menu }) => {
  return (
    <>
      <Link href="/">
        <a className={HeaderStyles["link__item"]}>Home</a>
      </Link>
      {menu.items.map(item => {
        const path = getSlug(item.url);

        if (item.object === "custom") {
          return (
            <a
              className={HeaderStyles["link__item"]}
              href={item.url}
              key={item.ID}
            >
              {item.title}
            </a>
          );
        }

        const actualPage = item.object === "rooms" ? "rooms" : "page";
        return (
          <Link
            as={`${path}`}
            href={`/${actualPage}?slug=${item.slug}&lang=el`}
            key={item.ID}
          >
            <a className={HeaderStyles["link__item"]}>{item.title}</a>
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
