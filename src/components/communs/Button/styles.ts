import styled, { css } from "styled-components";

type buttonType = {
  buttonType: "default" | "outline" | "black";
};

export const ButtonComponent = styled.button<buttonType>`
  ${({ theme, buttonType }) => css`
    background-color:
    ${(buttonType === "default" &&theme.colors.primaryColor500) ||
    (buttonType === "black" && theme.colors.backgroundSecondary500) ||
    (buttonType === "outline" && theme.colors.backgroundPrimary)};

    color: #ffffff;
    border-radius: 10px;
    padding: ${buttonType === "outline" ? "7px 16px" : "8px 20px"};
    font-size: 18px;
    line-height: 21px;
    font-weight: ${buttonType === "outline" ? "bold" : "500"};
    border: ${buttonType === "outline" ? "2px solid #fff" : "none"};
    transition: 0.2s all;
    &:hover {
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      background-color:
      ${(buttonType === "default" && theme.colors.primaryColor800) ||
      (buttonType === "black" && theme.colors.backgroundSecondary800) ||
      (buttonType === "outline" && theme.colors.backgroundPrimary)};
    }
    &:active {
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
      transform: scale(0.98);
    }
  `}
`;
