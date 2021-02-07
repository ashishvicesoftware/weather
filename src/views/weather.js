import React, { useEffect, useState } from "react";
import useGeoLocation from "../geoLocations/geo-locations";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";
import axiosWeatherInstance from "../axios/axios-weather-instance";
import axiosMapInstance from "../axios/axios-map-instances";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  displayCards: (props) => ({
    margin: "0 auto",
    padding: ".5rem",
    border: `2px solid gray`,
    marginRight: "10px",
  }),
  productsCardContainer: {
    padding: "0px 21px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  outerContainer: {
    display: "flex !important",
  },
  innerContainer: {
    padding: "10px 10px",
  },
  city: {
    textAlign: "center",
    padding: "10px 10px",
  },
}));

const Weather = () => {
  const classes = useStyles();
  const location = useGeoLocation();
  const [weatherdata, setWeatherData] = useState([]);

  const lat = location.loaded ? JSON.stringify(location.coordinates.lat) : null;
  const lng = location.loaded ? JSON.stringify(location.coordinates.lng) : null;

  console.log(weatherdata);
  useEffect(() => {
    {
      lat &&
        lng &&
        axiosWeatherInstance
          .get(
            `data/2.5/forecast?lat=${lat}&lon=${lng}&cnt=5&appid=3eeea7302d0d48fc96e666ee762c0280`
          )
          .then((response) => {
            setWeatherData(response.data.list);
          })
          .catch((error) => {});
    }
    lat &&
      lng &&
      axiosMapInstance
        .get(`api/geocode/json?latlng=${lat},${lng}&sensor=true'`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
  }, [lat, lng]);

  return (
    <>
      <h3 className={classes.city}>Gurgaon, India</h3>

      <Box className={classes.outerContainer}>
        {!!weatherdata &&
          weatherdata.map((data) => (
            <Box className={classes.displayCards}>
              <Box className={classes.productsCardContainer}>
                <Box className={classes.innerContainer}>
                  <h5>Friday</h5>
                  <h6>March 1</h6>
                  {data.weather.map((weather) => (
                    <>
                      <img
                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                      />
                      <h5>{(data.main.temp - 273.15).toFixed(2)}&deg;F</h5>
                      {weather.description}
                    </>
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default withAuthenticationRequired(Weather, {
  onRedirecting: () => <Loading />,
});
