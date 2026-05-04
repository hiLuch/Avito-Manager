// Стили верхнего меню: sticky-шапка, логотип и навигация лендинга.
import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(228, 231, 236, 0.85);
  background: rgba(245, 247, 251, 0.88);
  backdrop-filter: blur(18px);
`;

export const Inner = styled.div`
  display: flex;
  width: min(1160px, 100%);
  min-height: 72px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

export const Mark = styled.span`
  display: inline-grid;
  width: 38px;
  height: 38px;
  place-items: center;
  color: ${({ theme }) => theme.colors.surface};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  border-radius: 12px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 22px;
  color: #475467;
  font-weight: 700;

  @media (max-width: 900px) {
    display: none;
  }
`;
