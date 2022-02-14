const mongoose = require('mongoose');
const { mongoURL } = require('../config/keys');

module.exports = () => {
  mongoose.connect(mongoURL)
    .then(() => console.log('Подключение к базе данных успешно прошло'))
    .catch((error) => console.log(error));
};
