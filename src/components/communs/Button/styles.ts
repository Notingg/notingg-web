import styled, { css } from 'styled-components';

type buttonType = {
  variant: 'default' | 'outline' | 'black';
};

export const ButtonComponent = styled.button<buttonType>`
  ${({ theme, variant }) => css`
    background-color: ${(variant === 'default' &&
      theme.colors.blue500) ||
    (variant === 'black' && theme.colors.backgroundSecondary500) ||
    (variant === 'outline' && theme.colors.backgroundPrimary)};

    color: ${theme.colors.white};
    border-radius: 10px;
    padding: ${variant === 'outline' ? '7px 16px' : '8px 20px'};
    font-size: 18px;
    line-height: 21px;
    font-weight: ${variant === 'outline' ? 'bold' : '500'};
    border: ${variant === 'outline' ? '2px solid #fff' : 'none'};
    transition: 0.2s all;
    &:hover {
    opacity:0.8;
    &:active {
      transform: scale(0.98);
    }
  `}
`;
