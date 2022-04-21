import styled from "styled-components";

export const StyledComingSoon = styled.div`
  width: 90%;
  display: flex;
  margin-left: 5%;
  padding: 1rem;
  align-items: center;
  gap: 5rem;
  border-top: .1rem ${(props) => props.theme.borderColor} solid;
  border-bottom: .1rem ${(props) => props.theme.borderColor} solid;
  margin-bottom: 5rem;
  padding-top: 4rem;
  padding-bottom: 0;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ComingSoonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    text-transform: uppercase;
    font-weight: 600;
    color: #ff3998;
  }

  h1 {
    font-size: 5rem;
    font-size: clamp(1.5rem, 4.5vmin, 4rem);
  }

  p {
    line-height: 180%;
    width: 80%;
  }

  button {
    padding: 10px;
    border-radius: 1.5rem;
    border: 3px #ff4c76 solid;
    width: 8rem;
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
  }

  button:hover {
    width: 8.5rem;
    padding: 12px;
  }
`;

export const ComingSoonImg = styled.div`
  img {
    width: 170px;
    position: relative;
  }
  @media (max-width: 840px) {
    img {
      width: 70%;
      max-width: 300px;
    }

    p {
      width: 95%;
    }
  }
`;
