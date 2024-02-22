const initialState = {
    todayWeather: null,
    forecastWeather: null,
  };
  
  function weatherReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "TODAY_WEATHER":
        return {
          ...state,
          todayWeather: payload.data,
        };
  
      case "FORECAST_WEATHER":
        return {
          ...state,
          forecastWeather: payload.data.list,
        };
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default weatherReducer;