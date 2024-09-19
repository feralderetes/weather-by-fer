import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather row mt-3">
      <div className="current-weather col-6">
        <h1>Berlin,</h1>
        <h2>Germany</h2>
        <div className="temperature">
          <span className="temperature-value">22</span>
          <span className="temperature-degrees">°</span>
          <span className="temperature-icon">🌤️</span>
        </div>
        <div className="condition">Clear sky</div>
      </div>
      <div className="additional-info col-6">
        <div className="row">
          <div className="col-5 additional-info-box m-1 p-2">
            Feels Like <br />
            <strong>20°</strong>
          </div>
          <div className="col-5 additional-info-box m-1 p-2">
            Humidity <br />
            <strong>74%</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-5 additional-info-box m-1 p-2">
            Wind <br />
            <strong>5.36 km/h</strong>
          </div>
          <div className="col-5 additional-info-box m-1 p-2">
            Air pressure <br />
            <strong>1027 hPa</strong>
          </div>
        </div>
      </div>
      <div className="last-updated mt-2">Last updated: Wednesday 12:32</div>
    </div>
  );
}
