const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/dining_halls", (req, res) => {
  db.Dining_Hall.findAll()
    .then((halls) => res.send(halls))
    .catch((error) => {
      console.log(error);
    });
});

router.get("/dining_halls/:hall_id", (req, res) => {
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

router.get("/dietary_restrictions", (req, res) => {
  db.Dietary_Restrictions.findAll()
    .then((restriction) => res.send(restriction))
    .catch((error) => {
      console.log(error);
    });
});
router.get("/dietary_restrictions/:restriction_id", (req, res) => {
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
