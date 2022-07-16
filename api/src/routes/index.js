const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flags: e.flags[1],
      continents: e.continents[0],
      capital:
        (e.capital || []).length === 0 ? "No tiene capital" : e.capital[0],
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    };
  });

  return apiInfo;
};
const getDbInfo = async () => {
  return await Country.findAll({
    includes: Activity,

    // attributes: ['name', 'dificultad', 'duracion', 'temporada',],
    // through: { activities: [] } // Mediante
  });
};

const getAllCountries = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = dbInfo.concat(apiInfo);
  return infoTotal;
};

router.get("/countries", async (req, res) => {
  //query
  let allCountries = await Country.findAll({ include: Activity }); //consulta la base de datos
  const id = req.query.id; // peticion
  const name = req.query.name;

  if (!allCountries.length) {
    allCountries = await getApiInfo();
    await Country.bulkCreate(allCountries);
  }

  return res.status(200).json(allCountries);
});

module.exports = router;
