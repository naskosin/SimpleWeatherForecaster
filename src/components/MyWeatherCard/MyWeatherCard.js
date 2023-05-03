import moment from "moment";
import { dateBuilder } from "../../services/datebuilder";
import { weatherPic } from "../../services/weatherPic";
import "./MyCard.css";

export const MyCard = ({ weather, index }) => {
   const condition=  weatherPic(weather.weather[0].main)
  return (
    <div className="Card">
      <header className="Header">{weather.name}</header>
      <div className="Date">
      {/* <p>Date: {dateBuilder(new Date())}</p> */}
      <p>{moment().add(index,'day').format("dddd")}, {moment().add(index,'day').format("LL")}</p>
    
      </div>
    
      <div className="ImageContainer">
          
      <img src={condition}/>
      </div>
      <div className="Temperature">
        <p>
          Actual temp: <span>{weather.main.temp} &deg;C</span>
        </p>
        <p>
          Feels like: <span>{weather.main.feels_like} &deg;C</span>
        </p>
        
      </div>
      <p className="Condition">
        Condition: <span>{weather.weather[0].main}</span>
      </p>
      <p>Wind: {weather.wind.speed}m/s</p>
      <p>Atmosphere pressure: {weather.main.pressure}hpa</p>
      <p>Max temperature: {weather.main.temp_max}&deg;C</p>
      <p>Min temperature: {weather.main.temp_min}&deg;C</p>
      <p>Humidity: {weather.main.humidity}</p>
      </div>
  );
};
