import { Button } from '../../communs/Button';
import IconButton from '../../communs/IconButton';


import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <Button variant="default">Default</Button>
      <Button variant="black">Black</Button>
      <Button variant="outline">Outline</Button>
      <IconButton
        description='100 Ncoins'
        icon={'/assets/icons/logo.svg'}
        handleClick={() => console.log('deu certo')}
      />
      <IconButton
        description='100 Ncoins'
        icon={'/assets/icons/ranking.svg'}
        handleClick={() => console.log('deu certo')}
      />
      <IconButton
        icon={'/assets/icons/money.svg'}
        handleClick={() => console.log('deu certo')}
      />
    </S.Header>
  );
};
