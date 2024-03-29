import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    let json = await axios.get("/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getActivity() {
  return async function (dispatch) {
    let json = await axios.get("/activity");
    return dispatch({
      type: "GET_ACTIVITY",
      payload: json.data,
    });
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/countries?name=${name}`);
      return dispatch({
        type: "GET_NAME",
        payload: json.data,
      });
    } catch (error) {
      alert("Search for a country");
      console.log(error);
    }
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_NAME",
    payload,
  };
}

export function orderByPopulation(payload) {
  return {
    type: "ORDER_POPULATION",
    payload,
  };
}

export function filterCountry(payload) {
  return {
    type: "FILTER_COUNTRY",
    payload,
  };
}

export function filterActivity(payload) {
  return {
    type: "FILTER_ACTIVITY",
    payload,
  };
}

export function postActivity(payload) {
  console.log(payload, "payloaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad");

  return async function (dispatch) {
    let json = await axios.post("/activity", payload);
    return json.data;
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/country/${id}`);
      // console.log(json.data);
      return dispatch({
        type: "GET_DETAILS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanDetail() {
  return {
    type: "CLEAR_DETAIL",
    payload: [],
  };
}
