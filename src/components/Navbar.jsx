import React from "react";
import { StyledContainer } from "./styled/Container.styled";
import { MobileContainer, Sidebar, StyledNav } from "./styled/Nav.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {BsMoonStarsFill} from 'react-icons/bs'
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <StyledNav>
      <StyledContainer>
        <MobileContainer>
          <div>
            <img src="./assets/logo.svg" alt="" />
          </div>
          <div className="menu-btn" onClick={handleClick}>
            {click ? <RiCloseLine /> : <GiHamburgerMenu />}
          </div>
        </MobileContainer>

        <Sidebar className={click ? "active-nav navy" : "navy"}>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Launch</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li className="switch" onClick={props.data}>
              <div onClick={handleClick}>{click ? <BsMoonStarsFill /> : <MdLightMode style={{color: 'blue'}}/>}</div>
            </li>
          </ul>
        </Sidebar>
      </StyledContainer>
    </StyledNav>
  );
}

export default Navbar;
