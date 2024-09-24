import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    return date;
  }

  function maxTemp() {
    return `${Math.round(props.data.temperature.maximum)}°`;
  }

  function minTemp() {
    return `${Math.round(props.data.temperature.minimum)}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">
        <FormattedDate date={day()} dateStyle="short" />
      </div>
      <div className="WeatherForecast-day-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        ></img>
      </div>
      <div>
        <strong className="WeatherForecast-max-temp">{maxTemp()}</strong>
        <span className="WeatherForecast-min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
