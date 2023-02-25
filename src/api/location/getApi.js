// const provinsi = async () => {
//   let dat = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json");
//   return dat.data;
// };

// const kabupaten = async (q) => {
//   let dat = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${q}.json`);
//   return dat.data;
// };
// const kecamatan = async (q) => {
//   let dat = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${q}.json`);
//   return dat.data;
// };
// const kelurahan = async (q) => {
//   let dat = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${q}.json`);
//   return dat.data;
// };

const provinsi = process.env.REACT_APP_PROVINSI;
const kabupaten = process.env.REACT_APP_KABUPATEN;
const kecamatan = process.env.REACT_APP_KECAMATAN;
const kelurahan = process.env.REACT_APP_KELURAHAN;

export { provinsi, kabupaten, kecamatan, kelurahan };
