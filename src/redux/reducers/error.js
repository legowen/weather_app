const initialState = {
    error: null,
  };
  
  function errorReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "ERROR":
        return {
          ...state,
          error: payload.error,
        };
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default errorReducer;