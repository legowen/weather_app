const initialState = {
    loading: false,
  };
  
  function loadingReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
  
      case "UNLOADING":
        return {
          ...state,
          loading: false,
        };
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default loadingReducer;