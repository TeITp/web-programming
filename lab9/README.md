# Лабораторна робота № 9 — Акустична варта

Standalone-застосунок Angular 22 для перегляду, додавання, видалення та зміни статусу датчиків шуму. Після перезавантаження відновлюється початковий список.

## Запуск

Потрібен Node.js 24.15 або новіший у гілці 24.

```sh
npm ci
npm start
```

Відкрийте http://localhost:4200.

## Збірка

```sh
npm run build -- --base-href ./
python3 -m http.server 8080 --directory dist/acoustic-watch/browser
```

Відкрийте http://localhost:8080. Production-збірка вже входить до архіву.

## GitHub Pages

Для конфігурації Pages з джерелом `main` і папкою `/ (root)` додайте `lab9/` до наявного репозиторію `web-programming`. Тоді застосунок буде доступний за шляхом `/web-programming/lab9/dist/acoustic-watch/browser/` на домені Pages цього репозиторію. Відносний `<base href="./">` дає змогу запускати ту саму збірку локально та у вкладеній папці Pages. Якщо в репозиторії вже налаштований workflow Pages, включіть цю папку збірки в його артефакт публікації.

[Документація GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
