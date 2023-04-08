import moment from "moment";
import "./MyCard.css";

export const MyCard = ({ weather }) => {
  return (
    <div className="Card">
      <header className="Header">{weather.name}</header>
      <p>Actual temp: {weather.main.temp}</p>
      <p>Feels like: {new Date().toLocaleTimeString("en-IN")}</p>
      <p>Date: {moment().format("dddd")}</p>
      <p>Time: {moment().format("LL")}</p>
    </div>
  );
};
