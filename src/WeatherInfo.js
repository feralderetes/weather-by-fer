import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row mt-3">
      <div className="current-weather col-6">
        <h1>{props.data.city},</h1>
        <h2>{props.data.country}</h2>
        <div className="temperature">
          <span className="temperature-value">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temperature-degrees">°</span>
          <span className="temperature-icon">
            <img src={props.data.iconUrl} alt={props.data.condition}></img>
          </span>
        </div>
        <div className="condition text-capitalize">{props.data.condition}</div>
      </div>
      <div className="additional-info col-6">
        <div className="row">
          <div className="col-5 additional-info-box m-1 p-2">
            Feels Like <br />
            <strong>{Math.round(props.data.feelsLike)}°</strong>
          </div>
          <div className="col-5 additional-info-box m-1 p-2">
            Humidity <br />
            <strong>{props.data.humidity}%</strong>
          </div>
        </div>
        <div className="row">
          <div className="col-5 additional-info-box m-1 p-2">
            Wind <br />
            <strong>{props.data.wind} km/h</strong>
          </div>
          <div className="col-5 additional-info-box m-1 p-2">
            Air pressure <br />
            <strong>{props.data.airPressure} hPa</strong>
          </div>
        </div>
      </div>
      <div className="last-updated mt-2">
        Last updated: <FormattedDate date={props.data.date} />
      </div>
    </div>
  );
}
