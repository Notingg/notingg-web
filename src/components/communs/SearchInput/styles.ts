import styled, { css } from "styled-components";

type IconPositionProps = {
  iconPosition: "right" | "left";
};

export const SearchInputComponent = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border: none;
    max-height: 40px;
    width: 100%;
    border-radius: 10px;
    padding: 18px 10px;
    background-color: ${theme.colors.backgroundSecondary500};
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

export const Icon = styled.button<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    background: transparent;
    border: none;
    right: ${iconPosition === "right" ? 0 : ""};
    left: ${iconPosition !== "right" ? 0 : ""};
    cursor: pointer;
    & > svg {
      width: 100%;
    }

    :focus-visible {
      outline: 1px solid ${theme.colors.silver};
    }
  `}
`;

export const SearchInputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    border-radius: 10px;
    background-color: ${theme.colors.backgroundSecondary500};
  `}
`;
