const cardsRoute = require('express').Router();
const path = require('path');
const fs = require('fs');

const cardsPath = path.join(__dirname, '../data/cards.json');

const doesFileExist = (req, res, next) => {
  fs.stat(cardsPath, (err) => {
    if (err == null) {
      return next();
    }
    if (err.code === 'ENOENT') {
      return res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    }
    return res.status(500).json({ message: err.message });
  });
};

const getCardsAsyncAwait = async (res) => {
  try {
    const data = await fs.promises
      .readFile(cardsPath, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (error) {
    return res.status(500).json({ message: 'Что-то не так с файлом на сервере' });
  }
};

cardsRoute.get('/', doesFileExist);
cardsRoute.get('/', async (req, res) => {
  const cards = await getCardsAsyncAwait(res);
  res.send(cards);
});

module.exports = cardsRoute;
