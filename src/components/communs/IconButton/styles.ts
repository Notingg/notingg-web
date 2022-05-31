import styled, { css } from 'styled-components';
import { IconButtonProps } from './index';



export const IconButtonWrapper = styled.div<IconButtonProps>`
  ${({ theme, description }) => css`
    cursor: pointer;
    display:inline-flex;
    border-radius: ${description ? '10px' : '50%'};
    max-height: 35px;
    width:${description ? '100px' : '35px'};
    background-color: ${theme.colors.backgroundSecondary800};
    h4 {
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      margin: auto 0px;
      padding: 0 15px 0 0px;
    }
  `}
`;


export const IconButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary800};
    box-shadow: none;
    border: none;
    display: flex;
    align-items: center;
    border-radius:50%;
    margin:0 auto;

  `}
`;
