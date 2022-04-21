import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const HeroContainer = styled.div`
  width: 95%;
  display: flex;
  margin-left: 5%;
  padding: 1rem;
  align-items: center;
  gap: 5rem;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    text-transform: uppercase;
    font-weight: 600;
    color: #ff3998;
    animation: slideIn;
    animation-duration: 3s;
  }

  h1 {
    font-size: 5rem;
    font-size: clamp(2rem, 6vmin, 6rem);
    animation: slideIn;
    animation-duration: 3s;
  }

  p {
    line-height: 180%;
    width: 80%;
    animation: slideIn;
    animation-duration: 3s;
  }

  button {
    padding: 10px;
    border-radius: 1.5rem;
    border: 3px #ff4c76 solid;
    width: 8rem;
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    animation: slideIn;
    animation-duration: 3s;
  }

  button:hover {
    width: 8.5rem;
    padding: 12px;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeroImg = styled.div`
  img {
    width: 400px;
    position: relative;
    animation: bounce 2s linear infinite;
  }

  @keyframes bounce{
    20%,50%,80%, to {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    70% {
      transform: translateY(-15px);
    }
    90% {
      transform: translateY(-4px);
    }
}

  @media (max-width: 840px) {
    img {
      width: 95%;
      max-width: 500px;
    }

    p {
      width: 95%;
    }
  }
`;
