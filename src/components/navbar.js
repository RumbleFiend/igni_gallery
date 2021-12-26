import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarelements";

const navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to={"/"}>
          <h1>Igni Gallery</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/gallery" activeStyle>
            Gallery
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/register" activeStyle>
            Register
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default navbar;
