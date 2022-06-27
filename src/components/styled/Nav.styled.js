import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;

  .active-nav {
    top: 0;
    transition: 0.5s ease;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;

  .menu-btn {
    display: none;
  }

  img {
    width: 60%;
  }

  .menu-btn {
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 640px) {
    width: 100%;

    .menu-btn {
      display: block;
    }
  }
`;

export const Sidebar = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 1rem;
  }

  ul li a {
    color: ${(props) => props.theme.fontColor};
  }

  .switch {
    cursor: pointer;
    font-size: 1.3rem;
  }

  .switch div {

  }

  @media (max-width: 640px) {
    position: absolute;
    top: -100vh;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.navColor};
    padding: 2rem;
    padding-top: 6rem;
    justify-content: flex-start;
    width: 100%;
    z-index: 111;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.27);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.3px);
    -webkit-backdrop-filter: blur(6.3px);

    ul {
      flex-direction: column;
    }
  }
`;
