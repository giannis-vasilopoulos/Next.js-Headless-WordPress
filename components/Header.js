import Link from "next/link";
import HeaderStyles from "../styles/modules/Header.module.scss";
import Logo from "../public/images/nextlogo.svg";
const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Logo width={150} height={100} />
    <Link href="/">
      <a className={HeaderStyles["link__item--black"]} style={linkStyle}>
        Home
      </a>
    </Link>
  </div>
);

export default Header;
