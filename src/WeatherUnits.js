import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [activeClass, setActiveClass] = useState({
    celsius: true,
    fahrenheit: false,
  });

  function changeToCelsius(event) {
    event.preventDefault();
    props.handleUnitsChange("celsius");
    setActiveClass({ celsius: true, fahrenheit: false });
  }

  function changeToFahrenheit(event) {
    event.preventDefault();
    props.handleUnitsChange("fahrenheit");
    setActiveClass({ celsius: false, fahrenheit: true });
  }

  return (
    <div className="units mt-2">
      <a
        className={activeClass.celsius ? "active" : ""}
        href="/"
        onClick={changeToCelsius}
      >
        {" "}
        °C{" "}
      </a>
      /
      <a
        href="/"
        onClick={changeToFahrenheit}
        className={activeClass.fahrenheit ? "active" : ""}
      >
        {" "}
        °F{" "}
      </a>
    </div>
  );
}
