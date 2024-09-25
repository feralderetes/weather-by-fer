import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="current-weather col-sm">
          <h1>{props.data.city},</h1>
          <h2>{props.data.country}</h2>
          <div className="temperature">
            <div className="temperature-value">
              <Temperature
                temperature={props.data.temperature}
                units={props.units}
              />
            </div>
            <span className="temperature-degrees">°</span>
            <span className="temperature-icon">
              <img src={props.data.iconUrl} alt={props.data.condition}></img>
            </span>
          </div>
          <div className="condition text-capitalize">
            {props.data.condition}
          </div>
        </div>
        <div className="additional-info col-sm">
          <div className="row">
            <div className="col additional-info-box m-2 p-2">
              <span className="material-symbols-outlined">
                device_thermostat
              </span>
              <div>Feels Like</div>
              <strong>
                <Temperature
                  temperature={props.data.feelsLike}
                  units={props.units}
                />
                °
              </strong>
            </div>
            <div className="col additional-info-box m-2 p-2">
              <span className="material-symbols-outlined">
                humidity_percentage{" "}
              </span>
              <div>Humidity</div>
              <strong>{props.data.humidity}%</strong>
            </div>
          </div>
          <div className="row">
            <div className="col additional-info-box m-2 p-2">
              <span className="material-symbols-outlined"> air </span>
              <div>Wind</div>
              <strong>{props.data.wind} km/h</strong>
            </div>
            <div className="col additional-info-box m-2 p-2">
              <span className="material-symbols-outlined"> airware </span>
              <div>Air pressure</div>
              <strong>{props.data.airPressure} hPa</strong>
            </div>
          </div>
        </div>
        <div className="last-updated mt-2">
          Last updated:{" "}
          <FormattedDate date={props.data.date} dateStyle="long" />
        </div>
      </div>
    </div>
  );
}
