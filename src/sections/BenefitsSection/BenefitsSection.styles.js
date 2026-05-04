// Стили секции пользы: карточки преимуществ и оформление иконок.
import { Card, Row } from 'antd';
import styled from 'styled-components';

export const CardsRow = styled(Row)`
  margin-top: 34px;
`;

export const BenefitCard = styled(Card)`
  height: 100%;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
`;

export const IconBox = styled.div`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 30px;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;
