const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");
const { getAllCountries } = require("../Controllers");

router.get("/", async (req, res) => {
  const { name } = req.query;
  const { id } = req.params;
  try {
    let allCountries = await Country.findAll({ include: { model: Activity } });
    if (!allCountries.length) {
      allCountries = await getAllCountries();
      await Country.bulkCreate(allCountries);
    }
    if (id) {
      const idCountry = allCountries.find((r) => r.id == id.toUpperCase());
      return idCountry.length
        ? res.status(200).send(idCountry)
        : res.status("No existe ese Id pais");
    }
    // console.log(allCountries);
    if (name) {
      let countryName = await allCountries.filter((t) =>
        t.name.toLowerCase().includes(name.toLowerCase())
      );
      countryName.length
        ? res.status(200).send(countryName)
        : res.status(404).send("No exits");
    }
    res.status(200).json(allCountries);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const allCountries = await Country.findAll({ include: { model: Activity } });
  // console.log(allCountries);
  const idCountry = allCountries.find((r) => r.id === id.toUpperCase());
  console.log(idCountry);
  if (idCountry) {
    // console.log(idCountry);
    res.status(200).send(idCountry);
  } else {
    res.status("No existe ese Id pais");
  }
});

module.exports = router;
