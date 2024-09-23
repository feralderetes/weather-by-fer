import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          Sun <div className="WeatherForecast-icon">🌤️</div>
          <div>
            <strong className="WeatherForecast-max-temp">18°</strong>
            <span className="WeatherForecast-min-temp">16°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
