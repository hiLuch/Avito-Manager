// Стили секции выгоды: карточки статистики и поясняющий текст.
import { Card, Row } from 'antd';
import styled from 'styled-components';

const getCardBackground = ({ $variant, theme }) => {
  if ($variant === 'green') return theme.colors.surfaceGreen;
  if ($variant === 'blue') return theme.colors.surfaceSoft;
  return theme.colors.surface;
};

export const StatsRow = styled(Row)`
  margin-top: 34px;
`;

export const StatCard = styled(Card)`
  height: 100%;
  background: ${getCardBackground};
`;

export const StatText = styled.p`
  color: #475467;
`;
