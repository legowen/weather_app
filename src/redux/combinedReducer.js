// Redux
import { combineReducers } from "redux";
// Reducer
import loadingReducer from "./reducers/loading";
import errorReducer from "./reducers/error";
import weatherReducer from "./reducers/weather";
import cityReducer from "./reducers/city";

const reducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  weather: weatherReducer,
  city: cityReducer,
});

export default reducer;