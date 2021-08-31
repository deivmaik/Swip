import React from "react";

import { NavLink, NavMenu } from "./navbar.styles";

import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <NavMenu>
      <Router>
        <NavLink to="/comofunciona"> ¿como funciona?</NavLink>
        <NavLink to="/modelo"> modelos</NavLink>
        <NavLink to="/footer"> contacto</NavLink>
      </Router>
    </NavMenu>
  );
};

export default Navbar;
