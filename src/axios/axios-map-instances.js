import axios from "axios";

const axiosMapInstance = axios.create({
  baseURL: "http://maps.googleapis.com/maps/",
});

export default axiosMapInstance;
