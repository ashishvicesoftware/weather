import axios from "axios";

const axiosWeatherInstance = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

export default axiosWeatherInstance;
