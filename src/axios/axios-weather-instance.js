import axios from "axios";

const axiosWeatherInstance = axios.create({
  baseURL: "https://api.openweathermap.org/",
});

export default axiosWeatherInstance;
