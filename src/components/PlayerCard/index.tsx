import { ButtonIcon } from 'components/ButtonIcon';

import * as S from './styles';

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => (
  <S.Container>
    <S.Icon name='person' />
    <S.Name>{name}</S.Name>

    <ButtonIcon type='secondary' icon='close' onPress={onRemove} />
  </S.Container>
);
