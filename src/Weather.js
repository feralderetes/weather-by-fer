import React, { useState } from "react";
import axios from "axios";
import WeatherUnits from "./WeatherUnits";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [units, setUnits] = useState("celsius");
  const [weatherData, setWeatherData] = useState({
    loaded: false,
  });
  const apiKey = "4a6baff0aba2ofc3b32f2f5atce330d1";

  function changeUnits(units) {
    setUnits(units);
  }

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      condition: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      airPressure: response.data.temperature.pressure,
      loaded: true,
    });
  }

  function searchCity() {
    let currentWeatherApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(currentWeatherApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <header className="pb-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Search city 🔎"
                  className="form-control search-bar"
                  autoFocus="on"
                  onChange={updateCity}
                ></input>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn search-btn"
                ></input>
              </div>
            </div>
          </form>
        </header>{" "}
        <main>
          <WeatherUnits handleUnitsChange={changeUnits} />
          <WeatherInfo data={weatherData} units={units} />
          <WeatherForecast
            city={weatherData.city}
            units={units}
            apiKey={apiKey}
          />
        </main>
      </div>
    );
  } else {
    searchCity();
    return <h1>Loading...</h1>;
  }
}
