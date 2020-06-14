const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', users);
app.use('/cards', cards);
app.use((req, res) => res.status(404).send({ message: `Запрашиваемый ресурс: ${req.url} не найден` }));
app.use((err, req, res) => res.status(500).json({ message: `Ошибка${err}` }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
// console.log(`App listening on port ${PORT}`);
});
