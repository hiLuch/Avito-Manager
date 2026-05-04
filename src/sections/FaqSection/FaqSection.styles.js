// Стили FAQ-секции: оформление Collapse без inline style и увеличенные заголовки вопросов.
import { Collapse } from "antd";
import styled from "styled-components";

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
    font-family: ${({ theme }) =>
      theme.fonts?.heading || "Sora, Manrope, Arial, sans-serif"};
    font-size: 20px;
    font-weight: 800;
    line-height: 1.35;
  }
`;
