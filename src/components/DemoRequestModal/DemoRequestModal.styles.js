// Стили модального окна заявки: вводный текст перед формой.
import styled from 'styled-components';

export const ModalIntro = styled.p`
  margin: 0 0 22px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 15px;
  line-height: 1.7;
`;
