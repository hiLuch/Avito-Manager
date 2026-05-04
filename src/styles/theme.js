// Единая тема проекта: цвета, шрифты, токены Ant Design и базовые значения для styled-components.
export const theme = {
  colors: {
    background: '#F5F7FB',
    surface: '#FFFFFF',
    surfaceSoft: '#EEF4FF',
    surfaceGreen: '#EAFBF3',
    text: '#172033',
    muted: '#667085',
    primary: '#1E3A8A',
    primaryLight: '#DBEAFE',
    accent: '#16A34A',
    accentSoft: '#DCFCE7',
    warning: '#F59E0B',
    border: '#E4E7EC',
    dark: '#0F172A',
  },
  fonts: {
    body: 'Manrope, Arial, sans-serif',
    heading: 'Sora, Manrope, Arial, sans-serif',
  },
  shadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
  radius: '24px',
  antdTheme: {
    token: {
      colorPrimary: '#1E3A8A',
      colorSuccess: '#16A34A',
      colorText: '#172033',
      colorTextSecondary: '#667085',
      colorBgBase: '#F5F7FB',
      borderRadius: 14,
      fontFamily: 'Manrope, Arial, sans-serif',
    },
    components: {
      Button: {
        controlHeight: 46,
        borderRadius: 14,
        fontWeight: 700,
      },
      Card: {
        borderRadiusLG: 24,
      },
    },
  },
};
