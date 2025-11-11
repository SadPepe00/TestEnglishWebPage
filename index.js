const express = require('express');
const app = express();
const PORT = 3000;

const messages = []; // храним сообщения в памяти

// Для работы с JSON в POST запросах
app.use(express.json());

// Отдаём фронтенд из папки public
app.use(express.static('public'));

// GET маршрут для всех сообщений
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// POST маршрут для добавления нового сообщения
app.post('/api/message', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Нет текста' });

  messages.push({ text });
  res.json({ text });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
