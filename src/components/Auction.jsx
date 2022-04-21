import React from "react";
import { StyledAuction } from "./styled/Auction.styled";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
// import { Aucts } from "./dataFolder/AuctionData";

function Auction() {
  // const dataComp = Aucts.map((auct) => {
  //   return (
  //     <Card key={auct.id} title={auct.img} />
  //   )
  // })
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ]
  return (
    <StyledAuction>
      <div className="text">
        <h3>LE Super Rare Auction</h3>
        <p>
          We have released four limited edition NFTs early which can be bid on
          via OpenSea.
        </p>
      </div>
      <Carousel breakPoints={breakPoints} className='caro'>
        <Card image='./assets/purple-man.svg' name='Purple Man'/>
        <Card image='./assets/beige.svg' name='Beige'/>
        <Card image='./assets/red-man.svg' name='Red Man'/>
        <Card image='./assets/green.svg' name='Green'/>
        <Card image='./assets/robot-nft.svg' name='Purple Man'/>
        <Card image='./assets/drone.svg' name='Purple Man'/>
        <Card image='./assets/piggy.svg' name='Purple Man'/>
      </Carousel>
    </StyledAuction>
  );
}

export default Auction;
