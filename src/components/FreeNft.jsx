import React from "react";
import { StyledFreeNft } from "./styled/FreeNft.styled";

function FreeNft() {
  return (
    <StyledFreeNft>
      <div className="free-nft-text">
        <h2>Free NFT for early birds.</h2>
        <p>Sign up today and you’ll get a free NFT when we launch.</p>
      </div>
      <div className="animated">
        <div className="wrapper">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
      </div>
    </StyledFreeNft>
  );
}

export default FreeNft;
