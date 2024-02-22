import React from "react";
import { useState } from "react";
// React-Redux
import { useDispatch, useSelector } from "react-redux";
// Skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const liveSearchList = ["New York", "Toronto", "Boston", "Chicago", "Los Angeles", "San Fransisco", "Houston", "Texas", "Seoul", "Tokyo", "Osaka", "Shanghai", "Beijing", "London", "Manchester", "Paris", "Berlin", "Moscow", "Rome", "Madrid", "Istanbul", "Ho Chi Minh city", "Bangkok", "Jerusalem", "Honolulu", "Sydney", "Wellington"]; 

const SearchBox = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading.loading);
  const todayWeather = useSelector((state) => state.weather.todayWeather);

  // City Name Value
  const [searchCity, setSearchCity] = useState("");

  const citySubmitHandler = (e) => {
    e.preventDefault();

    dispatch({ type: "SEARCH_CITY", payload: { searchCity } });
    setSearchCity("");
    setLiveSearch(false);
  };

  // Live Search
  const [liveSearch, setLiveSearch] = useState(false);

  const filterLiveSearchList = liveSearchList.filter((city) => {
    return city.toLowerCase().includes(searchCity.toLowerCase());
  });

  if (loading) {
    return (
      <div className="searchBox">
        <Skeleton width={"280px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
        <Skeleton width={"100%"} height={"40px"} baseColor="#222" highlightColor="#fff" className="searchbox" />
      </div>
    );
  }

  return (
    <div className="searchBox">
      <h2>Current {todayWeather ? todayWeather.name : "Vancouver"}'s Weather?</h2>
      <form onSubmit={citySubmitHandler} className="searchbox">
        <input
          type="search"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          onFocus={() => setLiveSearch(true)}
          onBlur={() => setLiveSearch(false)}
          placeholder="Search City"
        />
        <ul className={liveSearch ? "live_search_box on" : "live_search_box"}>
          {filterLiveSearchList.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchBox;