import React from "react";
import { Header } from "./Header";
import * as S from "./styles";

export const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <S.Container>
      <Header />
      <main>{children}</main>
      <h1>Footer</h1>
    </S.Container>
  );
};
