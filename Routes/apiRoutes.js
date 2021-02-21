const express = require("express");
const router = express.Router();
const db = require("../models");

////////////////////////////////////
///////Dining Hall Endpoints////////
////////////////////////////////////
router.get("/dining", (req, res) => {
  db.Dining_Hall.findAll()
    .then((halls) => res.send(halls))
    .catch((error) => {
      console.log(error);
    });
});

router.get("/dining/:hall_id", (req, res) => {
  db.Dining_Hall.findAll({
    where: {
      hall_id: req.params.hall_id,
    },
  })
    .then((hall) => res.send(hall))
    .catch((error) => {
      console.log(error);
    });
});

router.post("/new/dining", (req, res) => {
  db.Dining_Hall.create({
    hall_id: req.body.hall_id,
    hall_name: req.body.hall_name,
    hall_location: req.body.hall_location,
  })
    .then((newDining) => res.send(newDining))
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/delete/dining/:hall_id", (req, res) => {
  db.Dining_Hall.destroy({
    where: {
      hall_id: req.params.hall_id,
    },
  }).then(() => res.send("Successfully Deleted"));
});

router.put("/edit/dining", (req, res) => {
  db.Dining_Hall.update(
    {
      hall_name: req.body.hall_name,
      hall_location: req.body.hall_location,
    },
    {
      where: {
        hall_id: req.body.hall_id,
      },
    }
  ).then(() => res.send("Successfully Updated"));
});

////////////////////////////////////
///////////Meals Endpoints//////////
////////////////////////////////////
router.get("/meals", (req, res) => {
  db.Meals.findAll()
    .then((meals) => res.send(meals))
    .catch((error) => {
      console.log(error);
    });
});

router.get("/meals/:meal_id", (req, res) => {
  db.Meals.findAll({
    where: {
      meal_id: req.params.meal_id,
    },
  })
    .then((meals) => res.send(meals))
    .catch((error) => {
      console.log(error);
    });
});
router.put("/edit/meal", (req, res) => {
  db.Meals.update(
    {
      meal_name: req.body.meal_name,
      meal_category: req.body.meal_category,
    },
    {
      where: {
        meal_id: req.body.meal_id,
      },
    }
  ).then(() => res.send("Meal Successfully Updated"));
});
////////////////////////////////////
///////////Macros Endpoints/////////
////////////////////////////////////
router.get("/macros", (req, res) => {
  db.Macros.findAll()
    .then((macros) => res.send(macros))
    .catch((error) => {
      console.log(error);
    });
});

router.get("/macros/:meal_id", (req, res) => {
  db.Macros.findAll({
    where: {
      meal_id: req.params.meal_id,
    },
  })
    .then((meals) => res.send(meals))
    .catch((error) => {
      console.log(error);
    });
});
router.put("/edit/macros", (req, res) => {
  db.Macros.update(
    {
      meal_name: req.body.meal_name,
      meal_category: req.body.meal_category,
      calories: req.body.calories,
      serving_size: req.body.serving_size,
      cholesterol: req.body.cholesterol,
      sodium: req.body.sodium,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
    },
    {
      where: {
        meal_id: req.body.meal_id,
      },
    }
  ).then(() => res.send("Successfully Updated"));
});

////////////////////////////////////
///Dietary Restrictions Endpoints///
////////////////////////////////////
router.get("/restrictions", (req, res) => {
  db.Dietary_Restrictions.findAll()
    .then((restriction) => res.send(restriction))
    .catch((error) => {
      console.log(error);
    });
});

router.get("/restrictions/:restriction_id", (req, res) => {
  db.Dietary_Restrictions.findAll({
    where: {
      restriction_id: req.params.restriction_id,
    },
  })
    .then((restrictions) => res.send(restrictions))
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
