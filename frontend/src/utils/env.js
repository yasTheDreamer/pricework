export const ROOT = `https://us-central1-priceworkapp.cloudfunctions.net/app`;
export const DEV_ROOT = `http://localhost:5000/priceworkapp/us-central1/app`;
export const READ_DATA = `${ROOT}/findAll`;
export const SAVE_DATA = `${ROOT}/save`;
export const DEV_READ_DATA = `${DEV_ROOT}/findAll`;
export const DEV_SAVE_DATA = `${DEV_ROOT}/save`;
export const RAPID_API_KEY = `23b802880dmshb67079a499d83d5p190b40jsn09894d2c915f`;
export const GEO_CITIES_URL = `https://wft-geo-db.p.rapidapi.com/v1/geo`;
export const GET_JOBS = `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with`;
export const GET_STATES = `${GEO_CITIES_URL}/countries/us/regions`;
export const GET_CITIES = `${GET_STATES}`;
export const ZIP_CODE_API_KEY =
  "js-XJLW32eQQYjxFEKAWSbZaOMrX0TNI3XRtA3N9AF5GUGBvbnt1OZtWCICR3ZrdbB4";
export const GET_ZIPCODES = `https://www.zipcodeapi.com/rest/${ZIP_CODE_API_KEY}/city-zips.json`;
