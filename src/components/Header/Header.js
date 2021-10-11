import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/1Nj-g3AxRWV9WeX83YtfroCCiK_HpBj4D/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Logo to="/">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5c26de14964607.5628b53195ba4.png"
            alt="logo"
          />
        </Logo>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
