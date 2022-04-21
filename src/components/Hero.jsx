import React from "react";
import { HeroContainer, HeroImg, HeroText, StyledHero } from "./styled/Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <HeroContainer>
        <HeroText>
          <span>Launching Soon</span>
          <h1>An NFT like no other</h1>
          <p>
            Don’t miss out on the release of our new NFT. Sign up below to
            receive updates when we go live.
          </p>
          <button>Sign Up</button>
        </HeroText>

        <HeroImg>
            <img src="./assets/robot.svg" alt="" />
        </HeroImg>
      </HeroContainer>
    </StyledHero>
  );
}

export default Hero;
