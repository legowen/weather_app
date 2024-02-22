import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Data
import { dates } from "../../../data/time";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ForecastWeather = () => {
  const loading = useSelector((state) => state.loading.loading);
  const forecastWeather = useSelector((state) => state.weather.forecastWeather);

  if (loading) {
    return (
      <div className="searchChart">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <ul>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
          <li>
            <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" />
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="forecastWeather">
      <h2>Weather Forecast</h2>
      <ul>
        {forecastWeather && forecastWeather.slice(0,5).map((forecast, index) => (
          <li key={index}>
            <div>
              <p>The forecast for the {dates + index}</p>
              <img
                src={
                  forecast 
                  ? process.env.PUBLIC_URL + `/image/weather${forecast.weather[0].icon}.svg` 
                  : process.env.PUBLIC_URL + `/image/weather13d.svg`
                }
                alt="Weather img"
              />
            </div>
            <p>The weather forecast predicts a temperature of {forecast ? forecast.main.temp : -1.05}°C, Humidity {forecast ? forecast.main.humidity : 65}%, Wind speed {forecast ? forecast.wind.speed : 2.5}ms It is expected by the Meteorological Administration.</p>
            <b>{forecast ? forecast.weather[0].main : "Snow"}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastWeather;