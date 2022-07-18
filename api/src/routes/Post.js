const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");

router.post("/", async (req, res) => {
  const { name, difficulties, duration, season, country } = req.body;
  if (!name || !difficulties || !duration || !season || !country) {
    return res.status(404).send("falta campo");
  }
  try {
    let activityCreated = await Activity.create({
      name,
      difficulties,
      duration,
      season,
    });

    let activityDB = await Country.findAll({
      where: { id: country },
    });

    await activityCreated.addCountry(activityDB);

    // for (let i = 0; i < country.length; i++) {
    //   console.log(country[i].id);
    //   await activityCreated.addCountry(country[i].id);
    // }
    return res.send("se creo");
  } catch (error) {
    res.status(404).send({ error: "error" });
  }
});

module.exports = router;
