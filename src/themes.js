import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  navColor: "white",
  cardColor: "#EEEEEE",
  cardTextColor: "#777777",
  borderColor: "#EEEEEE",
};

export const darkTheme = {
  body: "#111111",
  fontColor: "#fff",
  navColor: "#111111",
  cardColor: "#000000",
  cardTextColor: "#777777",
  borderColor: "#4b4b4b",
};

export const GlobalStyles = createGlobalStyle`
    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Inter', sans-serif;
    }

	body {
		background-color: ${(props) => props.theme.body};
	}

    img {
        width: 100%;
    }

    ul li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

`;
