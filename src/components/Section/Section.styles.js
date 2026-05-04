// Стили универсальной секции: задают контейнер, отступы и оформление заголовочного блока.
import styled from 'styled-components';

export const SectionWrap = styled.section`
  padding: ${({ $compact }) => ($compact ? '56px 20px' : '88px 20px')};

  @media (max-width: 768px) {
    padding: ${({ $compact }) => ($compact ? '40px 16px' : '64px 16px')};
  }
`;

export const Container = styled.div`
  width: min(1160px, 100%);
  margin: 0 auto;
`;

export const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 999px;
`;

export const Title = styled.h2`
  position: relative;
  max-width: 820px;
  margin: 0;
  padding-bottom: 18px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.04;
  letter-spacing: -0.055em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.primary} 62%,
    ${({ theme }) => theme.colors.accent} 115%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* ДОБАВЛЕНО: единый акцент для всех заголовков секций, чтобы они не выглядели как обычный Ant Design. */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 86px;
    height: 5px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    border-radius: 999px;
  }
`;

export const Description = styled.p`
  max-width: 720px;
  margin: 18px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 18px;
  line-height: 1.65;
`;
