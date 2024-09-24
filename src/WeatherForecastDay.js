import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    return date;
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
        <strong className="WeatherForecast-max-temp">
          <Temperature
            temperature={props.data.temperature.maximum}
            units={props.units}
          />
          °
        </strong>
        <span className="WeatherForecast-min-temp">
          <Temperature
            temperature={props.data.temperature.minimum}
            units={props.units}
          />
          °
        </span>
      </div>
    </div>
  );
}
