import React from "react";
import { About, NFT } from "./dataFolder/FooterData";
import { LeftFooter, RightFooter, StyledFooter } from "./styled/Footer.styled";
import {FaFacebook,FaTwitter,FaInstagram,FaTiktok} from 'react-icons/fa'

function Footer() {
  return (
      <>
    <StyledFooter>
      <LeftFooter>
        <img src="./assets/logo.svg" alt="" />
        <p>Exclusive NFT Collection</p>
        <ul>
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          <li><FaInstagram /></li>
          <li><FaTiktok /></li>
        </ul>
      </LeftFooter>

      <RightFooter>
          <div className="stand">
              <h6>About</h6>
              <a href="/">About</a>
              <a href="/">Terms</a>
              <a href="/">Legal</a>
          </div>
          <div className="stand">
              <h6>NFT</h6>
              <a href="/">OpenSea</a>
              <a href="/">Maker</a>
              <a href="/">Learn</a>
          </div>
          <div className="stand">
              <h6>Contact</h6>
              <a href="/">Press</a>
              <a href="/">Support</a>
          </div>
          <div className="stand">
              <h6>About</h6>
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
          </div>
      </RightFooter>
    </StyledFooter>

    <StyledFooter>
        <p>© Copyright 2022 NFTlanding</p>
        <p>Launching August 2022</p>
    </StyledFooter>
    </>
  );
}

export default Footer;
