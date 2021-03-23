/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

const macrosCustom = `
  SELECT 
    Meals.meal_name AS meal_name,
    Macros.calories AS calories,
    Macros.carbs AS carbs,
    Macros.sodium AS sodium,
    Macros.protein AS protein,
    Macros.fat AS fat,
    Macros.cholesterol AS cholesterol
  FROM
    Meals
    JOIN Macros
  WHERE
    Meals.meal_id = Macros.meal_id`;
router.get('/table/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(macrosCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

const mealMapCustom = `
  SELECT 
    hall_name,
    hall_address,
    hall_lat,
    hall_long,
    meal_name
  FROM
    Meals m
  INNER JOIN Meals_Locations ml 
    ON m.meal_id = ml.meal_id
  INNER JOIN Dining_Hall d
  ON d.hall_id = ml.hall_id;`;
router.get('/map/data', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(mealMapCustom, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});
router.get('/custom', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(req.body.query, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
