// Стили FAQ-секции: оформление Collapse без inline style и увеличенные заголовки вопросов.
import { Collapse } from 'antd';
import styled from 'styled-components';

export const FaqCollapse = styled(Collapse)`
  margin-top: 34px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;

  .ant-collapse-item {
    border-color: ${({ theme }) => theme.colors.border};
  }

  .ant-collapse-header {
    align-items: center !important;
    padding: 22px 24px !important;
  }

  .ant-collapse-header-text {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts?.heading || 'Sora, Manrope, Arial, sans-serif'};
    font-size: 20px;
    font-weight: 800;
    line-height: 1.35;
  }

  .ant-collapse-content {
    background: ${({ theme }) => theme.colors.surface};
  }

  .ant-collapse-content-box {
    padding: 0 24px 24px !important;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 17px;
    line-height: 1.7;
  }

  @media (max-width: 640px) {
    .ant-collapse-header {
      padding: 18px 18px !important;
    }

    .ant-collapse-header-text {
      font-size: 18px;
    }

    .ant-collapse-content-box {
      padding: 0 18px 20px !important;
      font-size: 16px;
    }
  }
`;
