import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/swiplogo.svg";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

import { Wrapper, NavLink, NavBtn } from "./header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Logo fill="black" />
      <Navbar />
      <NavBtn>
        <Button />
      </NavBtn>
    </Wrapper>
  );
};

export default Header;
