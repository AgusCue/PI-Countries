import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRIES",
      payload: json.data,
    });
  };
}

export function getActivity() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/activities");
    return dispatch({
      type: "GET_ACTIVITY",
      payload: json.data,
    });
  };
}

export function getName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );
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
  return async function (dispatch) {
    let json = await axios.post("http://localhost:3001/activity", payload);
    return json.data;
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/countries/${id}`);
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
