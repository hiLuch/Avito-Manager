// Стили корневого App-компонента: общий фон страницы.
import { Layout } from 'antd';
import styled from 'styled-components';

export const Page = styled(Layout)`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;
