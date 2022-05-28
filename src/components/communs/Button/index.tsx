import React from 'react'
import * as S from './styles'

type ButtonProps = {
  variant: 'default' | 'outline' | 'black';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', children }) => {
  return (
    <>
      <S.ButtonComponent variant={variant}>
        {children}
      </S.ButtonComponent>
    </>
  )
}
