import * as location from "./constant";

let initialState = {
  apiProvinsi: "",
  apiKabupaten: "",
  apiKecamatan: "",
  apiKelurahan: "",
};

let wilayahReducer = (state = initialState, action) => {
  switch (action.type) {
    case location.GET_PROVINSI:
      return {
        ...state,
        apiProvinsi: action.api,
      };
    case location.GET_KABUPATEN:
      return {
        ...state,
        apiKabupaten: action.api,
      };
    case location.GET_KECAMATAN:
      return {
        ...state,
        apiKecamatan: action.api,
      };
    case location.GET_KELURAHAN:
      return {
        ...state,
        apiKelurahan: action.api,
      };

    default:
      return state;
  }
};

export default wilayahReducer;
