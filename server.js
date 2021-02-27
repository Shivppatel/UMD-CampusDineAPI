import express from 'express';
import db from './models/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);

db.sequelizeDB.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on: http//localhost:${PORT}`);
  });
});
