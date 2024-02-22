import React from "react";
// Components
import SearchBox from "./Main/SearchBox";
import SearchInfo from "./Main/SearchInfo";
import SearchChart from "./Main/SearchChart";
import ForecastWeather from "./Main/ForecastWeather";

const Main = () => {
  return (
    <div className="main">
      <SearchBox />
      <SearchInfo />
      <SearchChart />
      <ForecastWeather />
    </div>
  );
};

export default Main;