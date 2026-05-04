# Avito Manager Landing

Промо-лендинг для приложения Avito Manager. Сделан на React, Ant Design, styled-components и webpack.

## Запуск

```bash
npm install
npm start
```

Откроется dev-сервер на `http://localhost:3000`.

## Сборка

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

## Где менять контент

- `src/sections/HeroSection.jsx` — первый экран.
- `src/sections/ExamplesSection.jsx` — примеры использования.
- `src/sections/BenefitsSection.jsx` — польза продукта.
- `src/sections/ProfitSection.jsx` — почему это выгодно.
- `src/sections/WorkflowSection.jsx` — как работает.
- `src/sections/VideoSection.jsx` — место для видео.
- `src/sections/PricingSection.jsx` — тарифы.
- `src/sections/CtaSection.jsx` — форма заявки.

## Картинки и видео

Сейчас в проекте стоят плейсхолдеры. Их можно заменить на обычные `img`, `video` или `iframe`.

Например:

```jsx
<img src="/images/dashboard.png" alt="Скриншот Avito Manager" />
```

Файлы можно положить в `public/images`.


## Что изменено в типографике

- Основной шрифт: `Manrope` — чистый современный SaaS/B2B стиль.
- Заголовки: `Unbounded` — более выразительный акцентный шрифт с поддержкой кириллицы.
- Все `h1`, `h2`, `h3` глобально выделены через `src/styles/global.css`.
- Главные заголовки секций дополнительно получают градиент и акцентную линию в `src/components/Section.jsx`.
- Тема styled-components подключена через `ThemeProvider` в `src/index.jsx`.
