import { Container } from "./styled";
import logo from "../../assets/Images/logo.svg";
import Menu from "../Menu";
import MenuMobile from "../MenuMobile";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Menu />
      <MenuMobile />
    </Container>
  );
};

export default Header;
