import React from "react";

export default function Temperature(props) {
  let temp = props.temperature;
  if (props.units === "fahrenheit") {
    temp = (temp * 9) / 5 + 32;
  }
  return <span>{Math.round(temp)}</span>;
}
