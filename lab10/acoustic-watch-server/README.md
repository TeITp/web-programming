# Лабораторна робота № 10 — API Акустичної варти

```sh
npm ci
npm run dev
```

За замовчуванням сервер доступний локально за адресою http://localhost:3000. Команда `npm start` запускає сервер без стеження за файлами.

| Метод | Шлях | Результат |
| --- | --- | --- |
| GET | / | Стан API |
| GET | /api/sensors | Усі датчики |
| GET | /api/sensors/1 | Датчик із ID 1 |
| GET | /api/sensors/999 | HTTP 404 і повідомлення `Sensor not found` |
| GET | /api/sensors/active | Активні датчики |
| GET | /api/sensors/stats | Кількість датчиків за статусами й середній рівень шуму |

## Render

Додайте `lab10/acoustic-watch-server` до наявного репозиторію `web-programming` та підключіть репозиторій як Web Service. Налаштування для гілки `main`:

- Runtime — Node
- Root Directory — `lab10/acoustic-watch-server`
- Build Command — `npm ci`
- Start Command — `npm start`
- Health Check Path — `/`

Після публікації перевірте ті самі GET-маршрути на URL сервісу. Порт надає Render через `PORT`.

[Документація Render](https://render.com/docs/monorepo-support)
