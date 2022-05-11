import { Button } from "../../communs/Button";
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <Button buttonType="default">Default</Button>
      <Button buttonType="black">Black</Button>
      <Button buttonType="outline">Outline</Button>
    </S.Header>
  );
};
