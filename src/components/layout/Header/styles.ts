import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    gap: 10px;
    border: 1px solid ${theme.colors.primaryColor500};
  `}
`;
