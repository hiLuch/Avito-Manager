// Стили секции примеров: карточки сценариев и отступ под блок скриншотов.
import { Card, Row } from 'antd';
import styled from 'styled-components';

export const CardsRow = styled(Row)`
  margin-top: 34px;
`;

export const ScenarioCard = styled(Card)`
  height: 100%;
  box-shadow: 0 16px 44px rgba(15, 23, 42, 0.06);
`;

export const IconBox = styled.div`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
`;

export const CardText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;

export const ScreenshotBox = styled.div`
  margin-top: 28px;
`;
