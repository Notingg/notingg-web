import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    height: 100px;
    border: 1px solid ${theme.colors.backgroundSecondary};
  `}
`;
