import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    ${({ theme }) => css`
      margin: 0;
      padding: 0;
      background-color: ${theme.colors.backgroundPrimary};
      color: ${theme.colors.secondaryColor};
      font-family: ${theme.fontFamily};
    `}
  }
`;
