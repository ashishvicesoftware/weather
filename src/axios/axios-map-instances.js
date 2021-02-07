import axios from "axios";

const axiosMapInstance = axios.create({
  baseURL: "https://maps.googleapis.com/maps/",
});

export default axiosMapInstance;
