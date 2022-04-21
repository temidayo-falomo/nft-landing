import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Auction from "./components/Auction.jsx";
import ComingSoon from "./components/ComingSoon.jsx";
import Companies from "./components/Companies.jsx";
import Footer from "./components/Footer.jsx";
import FreeNft from "./components/FreeNft.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar data={themeToggler} />
        <Hero />
        <FreeNft />
        <Companies />
        <Auction />
        <ComingSoon />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
