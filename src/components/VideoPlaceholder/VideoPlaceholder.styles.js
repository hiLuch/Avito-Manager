// Стили видео-плейсхолдера: держат фон, размеры и оформление отдельно от JSX.
import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  display: flex;
  min-height: 420px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  background:
    radial-gradient(circle at 30% 20%, rgba(22, 163, 74, 0.35), transparent 34%),
    linear-gradient(135deg, ${({ theme }) => theme.colors.dark}, ${({ theme }) => theme.colors.primary});
  border-radius: 32px;
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.2);
`;

export const Play = styled.div`
  display: grid;
  gap: 14px;
  justify-items: center;
`;

export const PlayIcon = styled.div`
  font-size: 72px;
`;

export const Text = styled.p`
  max-width: 620px;
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 17px;
  line-height: 1.65;
`;
