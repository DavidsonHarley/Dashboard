require('@babel/register');
require('dotenv').config();

const morgan = require('morgan');

const express = require('express');
const path = require('path');
const { sequelize } = require('../db/models');

const app = express();
const cors = require('./middlewares/cors');

const { PORT } = process.env;

const tableRouter = require('./routers/Table.router');

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

app.use('/', tableRouter);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных успешно подключена! :)');
  } catch (error) {
    console.error('База данных не подключена:', error.message);
  }
  console.log(`Сервер поднят на ${PORT} порту!`);
});
