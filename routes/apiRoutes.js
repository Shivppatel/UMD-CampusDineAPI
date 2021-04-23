/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';
import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the UMD Dining API!');
});

// /////////////////////////////////
// ////WholeMeal demos////////
// /////////////////////////////////
router.route('/wholeMeal').get(async (req, res) => {
  try {
    const meals = await db.Meals.findAll();
    const macros = await db.Macros.findAll();
    const wholeMeals = meals.map((meal) => {
      const macroEntry = macros.find((macro) => macro.meal_id === meal.meal_id);
      console.log('meal', meal);
      console.log('macroEntry', macroEntry);

      return {
        ...meal.dataValues,
        ...macroEntry.dataValues
      };
    });
    res.json({ data: wholeMeals });
  } catch (err) {
    console.error(err);
    res.json({ message: 'Something went wrong on the server' });
  }
});

router.route('/wholeMeal2').get(async (req, res) => {
  try {
    const meals = await db.Meals.findAll({ include: db.Macros });
    console.log(meals);
    res.json(meals);
  } catch (err) {
    console.error(err);
    res.json({ message: err });
  }
});
// /////////////////////////////////
// ////Meal Map Custom SQL////////
// /////////////////////////////////
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
// /////////////////////////////////
// ////Passed in Custom SQL Endpoint////////
// ////////////////////////////////
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
