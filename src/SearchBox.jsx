import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState();
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "200d6a05bd5d57dddda5e428ad03b2f1";

  let getWeatherInfo = async () => {

      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
   
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      setError(false);
      updateInfo(newInfo);

    } catch {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <div>
        <div>
          <h5 style={{ textAlign: "center" }}>Search for Weather</h5>
        </div>
        <form style={{ textAlign: "center" }} action="" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="standard"
            onChange={handleChange}
            required
            value={city}
          />
          <div className="" style={{ margin: "10px" }}>
            <Button
              style={{ marginLeft: "100px" }}
              variant="outlined"
              type="submit"
            >
              Search
            </Button>
            {error && <p style={{color:"red"}}>no such place exists</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
