// Стили финального CTA-блока: темная продающая карточка и форма заявки.
import { Space } from 'antd';
import styled from 'styled-components';

export const CtaBox = styled.div`
  display: grid;
  gap: 28px;
  align-items: center;
  grid-template-columns: 1fr 420px;
  padding: 42px;
  color: ${({ theme }) => theme.colors.surface};
  background:
    radial-gradient(circle at 20% 10%, rgba(22, 163, 74, 0.42), transparent 34%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.dark}, ${({ theme }) => theme.colors.primary});
  border-radius: 34px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    padding: 28px;
  }
`;

export const CtaTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.06em;
  text-shadow: 0 12px 34px rgba(0, 0, 0, 0.18);
`;

export const CtaText = styled.p`
  color: rgba(255, 255, 255, 0.78);
  font-size: 18px;
  line-height: 1.7;
`;

export const FormBox = styled.div`
  padding: 22px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
`;

export const FormStack = styled(Space)`
  width: 100%;
`;
