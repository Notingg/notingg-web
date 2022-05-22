import { Button } from "../../communs/Button";
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <Button variant="default">Default</Button>
      <Button variant="black">Black</Button>
      <Button variant="outline">Outline</Button>
    </S.Header>
  );
};
