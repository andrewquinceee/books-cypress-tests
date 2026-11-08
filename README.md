# Автотесты для приложения booksApp (Cypress)

Тесты проверяют логин и работу с избранными книгами.

## Подготовка

1. Запустить приложение из репозитория booksApp (два терминала):
   - `npm start`
   - `node server.js`
2. Установить зависимости тестов: `npm install`

## Запуск тестов

| Команда | Конфигурация | Режим | Браузер |
|---|---|---|---|
| `npm run laptop-headed` | ноутбук 1366x768 | с окном | Chrome |
| `npm run laptop-headless` | ноутбук 1366x768 | без окна | Electron |
| `npm run mobile-headed` | мобильный 390x844 | с окном | Electron |
| `npm run mobile-headless` | мобильный 390x844 | без окна | Chrome |
