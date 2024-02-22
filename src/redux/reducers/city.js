const initialState = {
    city: null,
  };
  
  function cityReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "SEARCH_CITY":
        return {
          ...state,
          city: payload.searchCity,
        };
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default cityReducer;