const axios = require("axios");
const { Activity, Country } = require("../db");

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
  });
};

console.log(getDbInfo());

const getAllCountries = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = dbInfo.concat(apiInfo);
  return infoTotal;
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllCountries,
};
