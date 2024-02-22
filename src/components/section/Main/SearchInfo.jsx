import React from "react";
// React-Redux
import { useSelector } from "react-redux";
// Image
import TemperatureIcon from "../../../assets/img/Main/temperatureIcon.svg";
import HumidityIcon from "../../../assets/img/Main/humidityIcon.svg";
import WindIcon from "../../../assets/img/Main/windIcon.svg";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchInfo = () => {
  const loading = useSelector((state) => state.loading.loading);
  const todayWeather = useSelector((state) => state.weather.todayWeather);

  if (loading) {
    return (
      <ul className="searchInfo">
        <li style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div>
            <Skeleton width={"80px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
            <Skeleton width={"120px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
          </div>
          <Skeleton width={"40px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        </li>
        <li style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div>
            <Skeleton width={"80px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
            <Skeleton width={"120px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
          </div>
          <Skeleton width={"40px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        </li>
        <li style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div>
            <Skeleton width={"80px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
            <Skeleton width={"120px"} height={"20px"} baseColor="#222" highlightColor="#fff" />
          </div>
          <Skeleton width={"40px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        </li>
      </ul>
    );
  }

  return (
    <ul className="searchInfo">
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Vancouver"}</h3>
          <p>Current Temperature {todayWeather ? todayWeather.main.temp : -1.0}°C</p>
        </div>
        <img src={TemperatureIcon} alt="Wearher Img Icon" />
      </li>
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Vancouver"}</h3>
          <p>Current Humidity {todayWeather ? todayWeather.main.humidity : 65}%</p>
        </div>
        <img src={HumidityIcon} alt="Wearher Img Icon" />
      </li>
      <li>
        <div>
          <h3>{todayWeather ? todayWeather.name : "Vancouver"}</h3>
          <p>Current Wind Speed {todayWeather ? todayWeather.wind.deg : 150}m/s</p>
        </div>
        <img src={WindIcon} alt="Wearher Img Icon" />
      </li>
    </ul>
  );
};

export default SearchInfo;