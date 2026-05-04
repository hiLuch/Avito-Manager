// Стили секции тарифов: карточки пакетов, выделенный тариф и список возможностей.
import { Card, Row } from 'antd';
import styled from 'styled-components';

export const PlansRow = styled(Row)`
  margin-top: 34px;
`;

export const PlanCard = styled(Card)`
  height: 100%;
  color: ${({ $featured, theme }) => ($featured ? theme.colors.surface : theme.colors.text)};
  background: ${({ $featured, theme }) => ($featured ? theme.colors.dark : theme.colors.surface)};
  box-shadow: ${({ $featured }) => ($featured ? '0 24px 70px rgba(15, 23, 42, 0.22)' : '0 16px 44px rgba(15, 23, 42, 0.06)')};
`;

export const PlanName = styled.h3`
  margin-top: 18px;
`;

export const PlanPrice = styled.h2`
  color: inherit;
`;

export const FeaturesList = styled.ul`
  padding-left: 18px;
  line-height: 2;
`;
