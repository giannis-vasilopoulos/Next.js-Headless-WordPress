import Link from "next/link";
import HeaderStyles from "../styles/Header.module.scss";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a className={HeaderStyles["link__item--black"]} style={linkStyle}>
        Home
      </a>
    </Link>
    <Link href="/about">
      <a className={HeaderStyles["link__item"]} style={linkStyle}>
        About
      </a>
    </Link>
    <Link href="/fetch">
      <a className={HeaderStyles["link__item"]} style={linkStyle}>
        Fetch
      </a>
    </Link>
  </div>
);

export default Header;
