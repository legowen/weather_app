import React from "react";
import { useEffect } from "react";
// React-Redux
import { useDispatch, useSelector } from "react-redux";
// React-Redux-Action
import { getWeatherByCurrentLocationAction } from "./redux/actions/getWeatherByCurrentLocationAction";
import { getForecastByCurrentLocationAction } from "./redux/actions/getForecastByCurrentLocationAction";
import { getWeatherByCityAction } from "./redux/actions/getWeatherByCityAction";
import { getForecastByCityAction } from "./redux/actions/getForecastByCityAction";
// Components
import Error from "./components/Error/Error";
import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";

const App = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error.error);
  const city = useSelector((state) => state.city.city);

  // 1. Get User's current location
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;

      getWeatherByCurrentLocation(latitude, longitude);
      getForecastByCurrentLocation(latitude, longitude);
    });
  };

  // 1.1 현재위치 기반 API 호출
  const getWeatherByCurrentLocation = (latitude, longitude) => {
    dispatch(getWeatherByCurrentLocationAction.weatherByCurrentLocation(latitude, longitude));
  };

  // 1.2 현재위치 기반 5일치 예보 API 호출
  const getForecastByCurrentLocation = (latitude, longitude) => {
    dispatch(getForecastByCurrentLocationAction.forecastByCurrentLocation(latitude, longitude));
  };

  // 2.1 도시이름 기반 API 호출
  const getWeatherByCity = () => {
    dispatch(getWeatherByCityAction.weatherByCity(city));
  };

  // 2.2 도시이름 기반 5일치 예보 API 호출
  const getForecastByCity = async () => {
    dispatch(getForecastByCityAction.forecastByCity(city));
  };

  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
      getForecastByCity();
    }
  }, [city]);

  // error
  if (error) {
    return <Error />;
  }

  return (
    <div className="App">
      <div className="AppCover">
        <div className="Wrapper">
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;