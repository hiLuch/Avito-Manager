// Точка входа приложения: монтирует React, подключает глобальные стили, Ant Design и тему styled-components.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { ThemeProvider } from 'styled-components'; // ДОБАВИЛ: передает theme во все styled-components.
import App from './App';
import { theme } from './styles/theme';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU} theme={theme.antdTheme}>
      <ThemeProvider theme={theme}> {/* ДОБАВИЛ: нужен, чтобы styled-components видел общую тему проекта. */}
        <App />
      </ThemeProvider>
    </ConfigProvider>
  </React.StrictMode>
);
