const { application } = require("express");
const express = require("express");
const router = express.Router();

router.get("/myroute", (req, res) => {
  res.send("Hello this is my route");
});

module.exports=router;

