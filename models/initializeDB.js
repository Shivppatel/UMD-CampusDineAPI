import fs from 'fs';
// import { promises as fs } from 'fs';
import path, { join } from 'path';
import Sequelize from 'sequelize';

import configOptions from '../config/config.js';
import modelList from './index.js';

const { DataTypes } = Sequelize;

const env = process.env.NODE_ENV || 'development';
const config = configOptions[env];

let sequelizeDB;
if (config.use_env_variable) {
  sequelizeDB = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelizeDB = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db = modelList.reduce((collection, model) => {
  if (!collection[model.name]) {
    // eslint-disable-next-line no-param-reassign
    collection[model.name] = model(sequelizeDB, DataTypes);
  }
  return collection;
}, {});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelizeDB = sequelizeDB;
db.Sequelize = Sequelize;

export default db;
