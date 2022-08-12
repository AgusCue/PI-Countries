const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  details: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case "GET_NAME":
      return {
        ...state,
        countries: action.payload,
      };

    case "FILTER_COUNTRY":
      const filterCountry =
        action.payload === "all"
          ? state.allCountries
          : state.allCountries.filter((e) => e.continents === action.payload);
      return {
        ...state,
        countries: filterCountry,
      };

    case "FILTER_ACTIVITY":
      const filterACt =
        action.payload === "all"
          ? state.allCountries
          : state.allCountries.filter((e) => {
              const actividad = e.activities.map((m) => m.name);
              return actividad.includes(action.payload);
            });
      console.log(filterACt);
      return {
        ...state,
        countries: filterACt,
      };

    case "ORDER_NAME":
      let sortedName =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.countries.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        countries: sortedName,
      };

    case "ORDER_POPULATION":
      let sortedPoblation =
        action.payload === "des"
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              } else if (b.population > a.population) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              } else if (b.population > a.population) {
                return 1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        countries: sortedPoblation,
      };

    case "GET_ACTIVITY":
      return {
        ...state,
        activities: action.payload,
      };

    case "POST_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };

    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

    case "CLEAR_DETAIL":
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
