import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function searchCity() {
    const apiKey = "4a6baff0aba2ofc3b32f2f5atce330d1";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
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
          <WeatherInfo data={weatherData} />
        </main>
      </div>
    );
  } else {
    searchCity();
    return <h1>Loading...</h1>;
  }
}
