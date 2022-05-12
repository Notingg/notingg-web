import styled, { css } from "styled-components";

type buttonType = {
  variant: "default" | "outline" | "black";
};

export const ButtonComponent = styled.button<buttonType>`
  ${({ theme, variant }) => css`
    background-color:
    ${(variant === "default" &&theme.colors.primaryColor500) ||
    (variant === "black" && theme.colors.backgroundSecondary500) ||
    (variant === "outline" && theme.colors.backgroundPrimary)};

    color: #ffffff;
    border-radius: 10px;
    padding: ${variant === "outline" ? "7px 16px" : "8px 20px"};
    font-size: 18px;
    line-height: 21px;
    font-weight: ${variant === "outline" ? "bold" : "500"};
    border: ${variant === "outline" ? "2px solid #fff" : "none"};
    transition: 0.2s all;
    &:hover {
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      background-color:
      ${(variant === "default" && theme.colors.primaryColor800) ||
      (variant === "black" && theme.colors.backgroundSecondary800) ||
      (variant === "outline" && theme.colors.backgroundPrimary)};
    }
    &:active {
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
      transform: scale(0.98);
    }
  `}
`;
