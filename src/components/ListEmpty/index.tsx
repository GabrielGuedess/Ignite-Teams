import React from 'react';

import * as S from './styles';

type ListEmptyProps = {
  message: string;
};

export const ListEmpty = ({ message }: ListEmptyProps) => (
  <S.Container>
    <S.Message>{message}</S.Message>
  </S.Container>
);
