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
          <NavLink to="/gallery" activestyle="true">
            Gallery
          </NavLink> |
          <NavLink to="/contact" activestyle="true">
            Contact
          </NavLink> |
          <NavLink to="/register" activestyle="true">
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
