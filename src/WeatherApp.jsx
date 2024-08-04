import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Vijayawada",
    feelsLike: 24,
    temp: 76,
    tempMin: 33,
    tempMax: 45,
    humidity: 67,
    weather: 78,
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather APP by Balaji</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
