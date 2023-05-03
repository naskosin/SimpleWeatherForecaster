import { useState, useEffect, useRef } from "react";
import { MyCard } from "../MyWeatherCard/MyWeatherCard";
import { SearchBox } from "../SearchBox/SearchBox";
import { FiveWeatherData } from "../FiveDays/FiveDays";
import { getDataByLocation, getDataByLocationFiveDay } from "../../services/fetchData";

export const MyBio = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [fiveDaysweather, setfiveDaysweather] = useState([]);
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
     getDataByLocation(lat, long)
      
          .then((result) => {setWeather(result); 
            //setfiveDaysweather(result.name)
            console.log(result)});
    getDataByLocationFiveDay(lat, long)
   
          .then((result) => {
         setfiveDaysweather(Object.values(result.list))
            console.log(result)});
    } else {
      isMounted.current = true;
      console.log("No");
    }
  }, [lat, long]);

  const weatherDataHandler = (data) => {
    setWeather(data);
  };
  const weatherFiveDataHandler = (data) => {
    setfiveDaysweather(data);
  };
  return (
    <div>
      <SearchBox  weatherHandler={weatherDataHandler} weatherFiveDataHandler={weatherFiveDataHandler}/>
      {(typeof weather.main !== "undefined") ? (
        <MyCard weather={weather} />
      ) : (
        <p>Loading<i className="far fas fa-spinner fa-pulse"></i> </p>
      )}
        {fiveDaysweather ? <FiveWeatherData weatherData={fiveDaysweather}/>: <p>Nothing to display!</p>}
    </div>
  );
};
