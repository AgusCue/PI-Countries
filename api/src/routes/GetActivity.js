const { Router } = require("express");
const router = Router();
const { Activity } = require("../db");

router.get("/", async (req, res) => {
  const activity = await Activity.findAll();
  // console.log(activity);
  activity.length
    ? res.status(200).send(activity)
    : res.status(404).send("no hay actividades");
});

module.exports = router;
