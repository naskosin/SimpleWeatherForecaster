import { useState, useEffect, useRef } from "react";
import { MyCard } from "../MyWeatherCard/MyWeatherCard";
import { SearchBox } from "../SearchBox/SearchBox";

export const MyBio = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  //const [data, setData] = useState([]);
  const [weather, setWeather] = useState([]);
  const isMounted = useRef(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const fetchdata = async () => {
        await fetch(
            `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {setWeather(result);
            console.log(result)
           
          });
      };
      console.log("Hi");
      fetchdata();
    } else {
      isMounted.current = true;
      console.log("No");
    }
  }, [lat, long]);

  const weatherDataHandler = (data) => {
    setWeather(data);
  };

  return (
    <div>
      <SearchBox  weatherHandler={weatherDataHandler} />
      {(typeof weather.main !== "undefined") ? (
        <MyCard weather={weather} />
      ) : (
        <p>Loading<i className="far fas fa-spinner fa-pulse"></i> </p>
      )}
    </div>
  );
};
