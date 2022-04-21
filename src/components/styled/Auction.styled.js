import styled from "styled-components";

export const StyledAuction = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;

  button.rec-dot {
    /* background-color: transparent; */
    box-shadow: 0 0 1px 3px orange;
    border: 1px orange solid;
  }
  
  button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
    /* box-shadow: 0 0 1px 3px rgba(235,16,16,0.5);
    background-color: orange; */
}


  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .text h3 {
    font-size: 1.8rem;
  }

  .text p {
    margin-bottom: 1.5rem;
    line-height: 25px;
  }

`;
