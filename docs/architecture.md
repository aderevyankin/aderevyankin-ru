# Архитектура проекта

## Обзор

Одностраничный статический сайт-визитка на Next.js с минимальным TypeScript.

## Стек

- **Framework:** Next.js 16 (App Router, Static Export)
- **Language:** TypeScript (strict mode)
- **Styles:** CSS Modules
- **Hosting:** Yandex Object Storage

## Структура директорий

```
src/
├── app/                 # Next.js App Router (файловый роутинг)
│   ├── layout.tsx       # Корневой layout, метаданные, шрифты
│   ├── page.tsx         # Главная страница (точка входа)
│   ├── globals.css      # CSS-переменные, reset, базовые стили
│   └── favicon.ico
│
├── components/          # React-компоненты
│   ├── index.ts         # Общий экспорт всех компонентов
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   └── index.ts
│   ├── Benefits/
│   ├── Fit/
│   ├── Experience/
│   ├── Process/
│   ├── Formats/
│   ├── Contact/
│   ├── Footer/
│   └── ThemeToggle/     # Переключатель темы (client component)
│
├── styles/              # Общие стили (если нужны)
│
└── lib/                 # Утилиты (если понадобятся)
```

## Принципы

### Компоненты

- Каждый компонент в своей папке: `ComponentName/`
- Рядом лежит CSS Module: `ComponentName.module.css`
- Экспорт через именованный export (не default)
- Каждая папка имеет `index.ts` для реэкспорта
- Общий `components/index.ts` для удобного импорта

```tsx
// components/Hero/Hero.tsx
import styles from './Hero.module.css';

export function Hero() {
  return <section className={styles.hero}>...</section>;
}

// components/Hero/index.ts
export { Hero } from './Hero';

// Использование в page.tsx
import { Hero, Benefits, Contact } from '@/components';
```

### Стили

- CSS Modules для изоляции стилей
- CSS-переменные в `globals.css` для дизайн-токенов
- Mobile-first подход
- Без CSS-in-JS, без Tailwind

### Темы (светлая/тёмная)

Реализация через CSS-переменные:

```css
:root {
  /* Light theme (default) */
  --color-bg: #ffffff;
  --color-text: #1a1a1a;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #121214;
    --color-text: #f0f0f0;
  }
}

[data-theme="dark"] {
  /* Manual dark override */
}
```

Три режима:
- **system** — следует настройкам ОС (по умолчанию)
- **light** — принудительно светлая
- **dark** — принудительно тёмная

Переключение через `ThemeToggle` компонент (сохраняет выбор в localStorage).

### Маршрутизация

- Одна страница: `src/app/page.tsx`
- Все секции — компоненты на одной странице
- Якорные ссылки для навигации (`#contact`, `#about`)

## Ограничения Next.js App Router

Файлы в `app/` имеют специальное значение:

| Файл | Назначение |
|------|------------|
| `page.tsx` | UI страницы |
| `layout.tsx` | Общий layout |
| `loading.tsx` | UI загрузки |
| `error.tsx` | Обработка ошибок |
| `not-found.tsx` | 404 страница |

Компоненты **не должны** лежать в `app/` — только в `components/`.

## Static Export

Конфигурация в `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
};
```

Результат сборки — папка `out/` со статическими файлами.