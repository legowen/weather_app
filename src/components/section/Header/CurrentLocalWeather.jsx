import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Data
import { textWeek, dates, textMonth } from "../../../data/time";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CurrentLocalWeather = () => {
  const loading = useSelector((state) => state.loading.loading);
  const todayWeather = useSelector((state) => state.weather.todayWeather);

  if (loading) {
    return (
      <div className="currentLocalWeather">
        <div>
          <Skeleton width={"200px"} height={"30px"} baseColor="#222" highlightColor="#fff" />
          <Skeleton width={"150px"} height={"30px"} baseColor="#222" highlightColor="#fff" />
        </div>
        <Skeleton width={"60px"} height={"60px"} baseColor="#222" highlightColor="#fff" />
      </div>
    );
  }

  return (
    <div className="currentLocalWeather">
      <div>
        <h3>
          {todayWeather ? todayWeather.name : "Incheon"} {textWeek} {dates}{" "}
          {textMonth}
        </h3>
        <h3>
          <span>{todayWeather ? todayWeather.main.temp : "-2.00"}</span>{" "}
          {todayWeather ? todayWeather.weather[0].description : "light snow"}
        </h3>
      </div>
      <img
        src={
          todayWeather
            ? process.env.PUBLIC_URL + `/image/weather${todayWeather.weather[0].icon}.svg`
            : process.env.PUBLIC_URL + `/image/weather13d.svg`
        }
        alt={todayWeather ? todayWeather.weather[0].icon : "13d"}
      />
    </div>
  );
};

export default CurrentLocalWeather;