import Image from 'next/image';
import React from 'react'
import * as S from './styles'


export type IconButtonProps = {
  icon: string;
  description?: string;
  handleClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, description, handleClick }) => {
  return (
    <S.IconButtonWrapper icon={icon} description={description} onClick={handleClick}>
      <S.IconButton >
        <Image src={icon} alt={icon} width={18} height={18} />
      </S.IconButton>
      {description && (
        <h4>{description}</h4>
      )}
    </S.IconButtonWrapper>
  )
}


export default IconButton
