import { MyCard } from "../MyWeatherCard/MyWeatherCard";
import './FiveDays.css'

export const FiveWeatherData = ({weatherData})=>{
    return(
        <section className="fiveDays">
        {weatherData.map((x, index)=><MyCard key = {x.dt} index={index+1} weather={x}/>)}
        </section>
    )
}