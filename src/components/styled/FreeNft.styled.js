import styled from "styled-components";
import img from "../../gradient-bg.svg";

export const StyledFreeNft = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* padding: 4rem 2rem 2rem 2rem; */
  margin-bottom: 3rem;
  border-radius: 0.5rem;
  /* background-image: url(${img}); */
  /* border: 2px red solid; */
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  .animated {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .free-nft-text {
    position: absolute;
    z-index: 11;
    top: 50%;
    bottom: 50%;
    left: 5%;
    /* color: ${(props) => props.theme.navColor}; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
    overflow: hidden;
    /* background-color: ${(props) => props.theme.navColor}; */
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);

  }
  .wrapper div {
    position: absolute;
    filter: blur(50px);
    opacity: 0.8;
    -webkit-filter: blur(50px);
  }
  .animated .one {
    border-radius: 100%;
    width: 600px;
    height: 600px;
    background-color: #a960ee;
    left: -50px;
    top: -300px;
    z-index: 3;
    animation: fly 12s linear infinite;
    transform: rotate(0) translate(180px) rotate(0);
  }
  .animated .two {
    width: 600px;
    height: 900px;
    background-color: #ff333d;
    bottom: -30px;
    left: -80px;
    animation: flyPlus 10s linear infinite;
    -webkit-animation: flyPlus 10s linear infinite;
    transform: rotate(0) translate(200px) rotate(0);
  }
  .animated .three {
    border-radius: 100%;
    width: 550px;
    height: 550px;
    bottom: -80px;
    right: -100px;
    background-color: #ffcb57;
    animation: flyPlus 10s linear infinite;
    -webkit-animation: flyPlus 10s linear infinite;
    transform: rotate(0) translate(200px) rotate(0);
    -webkit-transform: rotate(0) translate(200px) rotate(0);
    -moz-transform: rotate(0) translate(200px) rotate(0);
    -ms-transform: rotate(0) translate(200px) rotate(0);
    -o-transform: rotate(0) translate(200px) rotate(0);
  }
  .four {
    border-radius: 100%;
    width: 450px;
    height: 450px;
    margin: auto;
    bottom: 0;
    right: 0;
    background-color: #90e0ff;
    animation: flyPlus 15s linear infinite;
    -webkit-animation: flyPlus 15s linear infinite;
    transform: rotate(0) translate(200px) rotate(0);
    -webkit-transform: rotate(0) translate(200px) rotate(0);
    -moz-transform: rotate(0) translate(200px) rotate(0);
    -ms-transform: rotate(0) translate(200px) rotate(0);
    -o-transform: rotate(0) translate(200px) rotate(0);
  }
  .animated .wrapper .text {
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    opacity: 1;
    filter: unset;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes fly {
    100% {
      transform: rotate(2turn) translate(200px) rotate(-2turn);
      -webkit-transform: rotate(2turn) translate(200px) rotate(-2turn);
      -moz-transform: rotate(2turn) translate(200px) rotate(-2turn);
      -ms-transform: rotate(2turn) translate(200px) rotate(-2turn);
      -o-transform: rotate(2turn) translate(200px) rotate(-2turn);
    }
  }
  @keyframes flyPlus {
    100% {
      transform: rotate(-2turn) translate(200px) rotate(2turn);
      -webkit-transform: rotate(-2turn) translate(200px) rotate(2turn);
      -moz-transform: rotate(-2turn) translate(200px) rotate(2turn);
      -ms-transform: rotate(-2turn) translate(200px) rotate(2turn);
      -o-transform: rotate(-2turn) translate(200px) rotate(2turn);
    }
  }
`;
