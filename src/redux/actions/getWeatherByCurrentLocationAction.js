function weatherByCurrentLocation(latitude, longitude) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: "LOADING" });
  
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
  
        if (response.status !== 200 || response.ok === false) {
          throw new Error("error");
        }
  
        dispatch({ type: "TODAY_WEATHER", payload: { data } });
        dispatch({ type: "UNLOADING" });
      } catch (error) {
        dispatch({ type: "ERROR", payload: { error } });
        dispatch({ type: "UNLOADING" });
      }
    };
  }
  
  export const getWeatherByCurrentLocationAction = { weatherByCurrentLocation };