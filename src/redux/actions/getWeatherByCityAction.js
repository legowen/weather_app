function weatherByCity(city) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: "LOADING" });
  
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
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
  
  export const getWeatherByCityAction = { weatherByCity };