const { application } = require("express");
const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/search/:id", (req, res, next) => {
    const searchId= req.params.id;
  res.send(searchId);
});

router.get("/search/:id/:animals", (req, res, next) => {
  const animals = {
    0: "tiger",
    1: "anaconda",
    2: "bug",
  };

  const animalsId = req.params.animals;
  if (animals) {
    res.send(animals[animalsId]);
    console.log(animalsId);
  } else {
    res.send("Animal not found");
  }
});

module.exports = router;
