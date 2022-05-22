import styled, { css } from "styled-components";

export const InputComponent = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary500};
    color: ${theme.colors.white};
    border-radius: 10px;
    border: none;
    max-height: 40px;
    width: 100%;
    padding: 18px 10px;
    &::placeholder {
      color: ${theme.colors.silver};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.white};
  `}
`;
