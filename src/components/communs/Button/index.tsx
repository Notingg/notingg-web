import React from 'react'
import * as S from './styles'

type ButtonProps = {
  buttonType: "default" | "outline" | 'black';
}

export const Button: React.FC<ButtonProps> = ({ buttonType = 'default', children }) => {
  return (
    <>
      <S.ButtonComponent buttonType={buttonType}>
        {children}
      </S.ButtonComponent>
    </>
  )
}
