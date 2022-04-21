import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 90%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-between;
  padding: 1rem;

  @media(max-width: 800px) {
      flex-direction: column;
      gap: 3rem;
      justify-content: flex-start;

      img {
          width: 180px;
      }
  }
  
`;

export const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ul {
    display: flex;
    gap: 0.5rem;
  }
`;

export const RightFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4rem;

  h6 {
      font-size: 1.1rem;
  }

  .stand {
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }

  a {
    color: ${(props) => props.theme.fontColor};
  }

  @media(max-width: 800px) {
      justify-content: flex-start;
  }

  @media(max-width: 555px) {
      flex-wrap: wrap-reverse;
    }
`