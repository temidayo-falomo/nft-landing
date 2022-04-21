import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 220px;
  overflow: hidden;
  margin: 0 10px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    border: 2px lightblue solid;
  }

  .card-text {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }

  .card-text p,
  span {
    color: ${(props) => props.theme.cardTextColor};
  }
`;
