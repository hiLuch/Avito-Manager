// Стили формы заявки: единый вид полей для модального окна и возможного повторного использования.
import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;

  .ant-form-item {
    margin-bottom: ${({ $compact }) => ($compact ? '14px' : '18px')};
  }

  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  .ant-input,
  .ant-select-selector {
    min-height: 46px;
    border-radius: 14px !important;
  }

  textarea.ant-input {
    min-height: ${({ $compact }) => ($compact ? '96px' : '120px')};
  }

  .ant-btn {
    height: 48px;
    font-weight: 800;
  }
`;
