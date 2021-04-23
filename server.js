/* eslint-disable no-console */
import express from 'express';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';
import diningRoute from './routes/diningRoute.js';
import mealsRoute from './routes/mealsRoute.js';
import macrosRoute from './routes/macrosRoute.js';
import restrictionsRoute from './routes/restrictionsRoute.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/api/dining', diningRoute);
app.use('/api/meals', mealsRoute);
app.use('/api/macros', macrosRoute);
app.use('/api/restrictions', restrictionsRoute);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
