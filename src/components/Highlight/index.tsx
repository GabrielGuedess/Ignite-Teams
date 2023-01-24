import React from 'react';

import * as S from './styles';

type HighlightProps = {
  title: string;
  subtitle: string;
};

export const Highlight = ({ title, subtitle }: HighlightProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Container>
);
