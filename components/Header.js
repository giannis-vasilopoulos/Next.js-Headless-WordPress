import Logo from "../public/images/nextlogo.svg";
import Menu from "./Menu";

const Header = ({ menu }) => {
  return (
    <div>
      <Logo width={150} height={100} />
      <Menu menu={menu} />
    </div>
  );
};

export default Header;
