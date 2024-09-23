import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecastData, setForecastData] = useState({ loaded: false });

  function handleResponse(response) {
    setForecastData({
      date: new Date(response.data.daily[1].time * 1000),
      iconUrl: response.data.daily[1].condition.icon_url,
      condition: response.data.daily[1].condition.description,
      max: response.data.daily[1].temperature.maximum,
      min: response.data.daily[1].temperature.minimum,
      loaded: true,
    });
  }

  function getForecast() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${props.apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function maxTemp() {
    return `${Math.round(forecastData.max)}°`;
  }

  function minTemp() {
    return `${Math.round(forecastData.min)}°`;
  }

  if (forecastData.loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">
              <FormattedDate date={forecastData.date} dateStyle="short" />
            </div>

            <div className="WeatherForecast-day-icon">
              <img
                src={forecastData.iconUrl}
                alt={forecastData.condition}
              ></img>
            </div>
            <div>
              <strong className="WeatherForecast-max-temp">{maxTemp()}</strong>
              <span className="WeatherForecast-min-temp">{minTemp()}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();
    return <div>Loading...</div>;
  }
}
