// Стили первого экрана: сетка, фон, крупный заголовок и карточка под главный скриншот.
import styled from 'styled-components';

export const Hero = styled.section`
  padding: 92px 20px 70px;
  background:
    radial-gradient(circle at 15% 10%, rgba(22, 163, 74, 0.16), transparent 28%),
    radial-gradient(circle at 90% 20%, rgba(30, 58, 138, 0.18), transparent 32%);
`;

export const Container = styled.div`
  display: grid;
  width: min(1160px, 100%);
  align-items: center;
  gap: 46px;
  grid-template-columns: 1.02fr 0.98fr;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h1`
  max-width: 820px;
  margin: 20px 0 20px;
  font-family: ${({ theme }) => theme.fonts?.heading || 'Sora, Manrope, Arial, sans-serif'};
  font-size: clamp(42px, 6vw, 76px);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.055em;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.primary} 55%,
    ${({ theme }) => theme.colors.accent} 112%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Lead = styled.p`
  max-width: 650px;
  margin: 0 0 28px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 20px;
  line-height: 1.65;
`;

export const Points = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
`;

export const MockCard = styled.div`
  padding: 14px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(228, 231, 236, 0.8);
  border-radius: 34px;
  box-shadow: 0 20px 70px rgba(15, 23, 42, 0.12);
`;
