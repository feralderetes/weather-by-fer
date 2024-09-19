import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather row">
      <div className="current-weather col-6">
        <h1>Berlin,</h1>
        <h2>Germany</h2>
        <div>22° Icon</div>
        <div>Clear sky</div>
      </div>
      <div className="additional-info col-6">
        <div className="row">
          <div className="col-6">Feels Like: 20°</div>
          <div className="col-6">Humidity: 74%</div>
        </div>
        <div className="row">
          <div className="col-6">Wind: 5.36 km/h</div>
          <div className="col-6">Air pressure: 1027 hPa</div>
        </div>
      </div>
      <div>Last updated: Wednesday 12:32</div>
    </div>
  );
}
