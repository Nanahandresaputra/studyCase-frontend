import * as location from "./constant.js";
import * as apiLocation from "../../api/location/getApi.js";
import axios from "axios";

let getProvinsi = () => {
  return (dispatch) => {
    axios
      .get(apiLocation.provinsi)
      .then((res) => {
        dispatch({
          type: location.GET_PROVINSI,
          api: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: location.GET_PROVINSI,
          api: err.message,
        });
      });
  };
};

let getKabupaten = (q) => {
  return (dispatch) => {
    axios
      .get(`${apiLocation.kabupaten}${q}.json`)
      .then((res) => {
        dispatch({
          type: location.GET_KABUPATEN,
          api: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: location.GET_KABUPATEN,
          api: console.log(err),
        });
      });
  };
};

let getKecamatan = (q) => {
  return (dispatch) => {
    axios
      .get(`${apiLocation.kecamatan}${q}.json`)
      .then((res) => {
        dispatch({
          type: location.GET_KECAMATAN,
          api: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: location.GET_KECAMATAN,
          api: console.log(err),
        });
      });
  };
};
let getKelurahan = (q) => {
  return (dispatch) => {
    axios
      .get(`${apiLocation.kelurahan}${q}.json`)
      .then((res) => {
        dispatch({
          type: location.GET_KELURAHAN,
          api: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: location.GET_KELURAHAN,
          api: console.log(err),
        });
      });
  };
};

export { getProvinsi, getKabupaten, getKecamatan, getKelurahan };
