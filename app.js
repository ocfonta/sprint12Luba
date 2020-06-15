const express = require('express');
const path = require('path');

const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/cards', cards);
app.use((req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));
app.use((err, req, res) => {
  res.status(500).json({ message: `Ошибка${err.message}` });
});

app.listen(PORT, () => {

// console.log(`App listening on port ${PORT}`);
});
