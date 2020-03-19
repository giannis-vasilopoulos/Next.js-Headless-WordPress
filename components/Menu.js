import React, { Component } from "react";
import Link from "next/link";
import HeaderStyles from "../styles/modules/Header.module.scss";

const Menu = ({ menu }) => {
  const getSlug = url => {
    const parts = url.split("/");
    return parts.length > 2 ? parts[parts.length - 2] : "";
  };
  return (
    <>
      <Link href="/">
        <a className={HeaderStyles["link__item"]}>Home</a>
      </Link>
      {menu.items.map(item => {
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
        const slug = getSlug(item.url);
        const actualPage = item.object === "category" ? "category" : "post";
        return (
          <Link
            as={`/${slug}`}
            href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
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
