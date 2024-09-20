import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      airPressure: response.data.temperature.pressure,
      loaded: true,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather row mt-3">
        <div className="current-weather col-6">
          <h1>{weatherData.city},</h1>
          <h2>{weatherData.country}</h2>
          <div className="temperature">
            <span className="temperature-value">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="temperature-degrees">°</span>
            <span className="temperature-icon">🌤️</span>
          </div>
          <div className="condition text-capitalize">
            {weatherData.condition}
          </div>
        </div>
        <div className="additional-info col-6">
          <div className="row">
            <div className="col-5 additional-info-box m-1 p-2">
              Feels Like <br />
              <strong>{Math.round(weatherData.feelsLike)}°</strong>
            </div>
            <div className="col-5 additional-info-box m-1 p-2">
              Humidity <br />
              <strong>{weatherData.humidity}%</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-5 additional-info-box m-1 p-2">
              Wind <br />
              <strong>{weatherData.wind} km/h</strong>
            </div>
            <div className="col-5 additional-info-box m-1 p-2">
              Air pressure <br />
              <strong>{weatherData.airPressure} hPa</strong>
            </div>
          </div>
        </div>
        <div className="last-updated mt-2">Last updated: Wednesday 12:32</div>
      </div>
    );
  } else {
    const apiKey = "4a6baff0aba2ofc3b32f2f5atce330d1";
    let city = props.defaultCity;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
