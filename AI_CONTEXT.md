# AI_CONTEXT

## Проект
- **Name:** aderevyankin-ru
- **Purpose:** Сайт-визитка технического партнёра для бизнеса (см. docs/core_idea.md)
- **Domain:** aderevyankin.ru

## Язык
- Все беседы и ответы ведём на русском.

## Стек

### Frontend
- **Framework:** Next.js (Static Export)
- **Language:** TypeScript (strict mode)
- **Styles:** CSS Modules
- **Package manager:** npm

### Hosting & Infrastructure
- **Static hosting:** Yandex Object Storage
- **Domain registrar:** Рег.ру
- **Serverless:** Yandex Cloud Functions (для формы обратной связи)
- **Notifications:** Telegram Bot API

## Структура проекта
```
aderevyankin-ru/
├── docs/                    # Документация
│   ├── core_idea.md         # Стратегический документ
│   └── ...                  # Другие документы   
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Корневой layout
│   │   ├── page.tsx         # Главная страница
│   │   └── globals.css      # Глобальные стили
│   ├── components/          # React-компоненты
│   └── styles/              # CSS Modules
├── public/                  # Статические файлы
├── functions/               # Yandex Cloud Functions
│   └── contact-form/        # Обработчик формы → Telegram
├── next.config.js           # Конфигурация Next.js (static export)
├── tsconfig.json            # Конфигурация TypeScript
└── package.json
```

## Команды
- **Установка:** `npm install`
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Export:** Статика генерируется в `out/`
- **Lint:** `npm run lint`

## Ключевые требования (из core_idea.md)
- 100% Lighthouse (или максимально близко)
- Минимальный JavaScript
- Zero-layout-shift
- Идеальная адаптивность
- Чистая семантика HTML
- Доступность (a11y)

## Секции сайта
1. Hero-блок (первый экран)
2. Чем полезен бизнесу
3. Для кого подхожу / не подхожу
4. Опыт и бэкграунд
5. Как я работаю
6. Форматы сотрудничества
7. Контактная форма

## Примечания
- Форма отправляет данные в Yandex Cloud Function → Telegram
- Контакты (телефон, email) НЕ публикуются на сайте
- Дизайн: минимализм, спокойный, взрослый, без трендов