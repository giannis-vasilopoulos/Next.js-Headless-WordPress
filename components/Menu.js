import { useContext } from "react";
import Link from "next/link";
import getSlug from "../components/common/getSlug";

import { AppContext } from "../context/Context";

const Menu = ({ menu }) => {
  const { locale } = useContext(AppContext);
  return (
    <>
      {menu.items.map((item) => {
        const path = getSlug(item.url);

        if (item.object === "custom") {
          return (
            <a className="link__item" href={item.url} key={item.ID}>
              {item.title}
            </a>
          );
        }

        return (
          <Link
            href={`${item.front_route}?slug=${item.slug}&lang=${locale}`} // ACF Field / front_route
            as={`${path}`}
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
