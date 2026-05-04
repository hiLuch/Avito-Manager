// Стили плейсхолдера изображения: отдельный файл, чтобы JSX оставался без CSS-разметки.
import styled from 'styled-components';

export const Placeholder = styled.div`
  display: flex;
  min-height: ${({ $height }) => $height || '320px'};
  align-items: center;
  justify-content: center;
  padding: 28px;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  background:
    linear-gradient(135deg, rgba(30, 58, 138, 0.08), rgba(22, 163, 74, 0.08)),
    ${({ theme }) => theme.colors.surface};
  border: 1px dashed #98a2b3;
  border-radius: 28px;
`;

export const Content = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
`;

export const IconWrap = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 34px;
`;
