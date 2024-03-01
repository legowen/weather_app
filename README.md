# Hope no Rain Project 🔆
<img width='70%' src="https://github.com/legowen/Portfolio-img/blob/main/img/weatherproject.png?raw=true"/>

Project created using JavaScript, React, Redux, and Sass (SCSS).
<br>
Users can check today's weather based on their current location if they allow location access, and they can easily view the temperature, humidity, and wind speed on a graph. Additionally, they can receive a 5-day forecast. Moreover, users can enter a city name to obtain weather information for that specific city.

1. Utilization Figma (Design Tool)

- Creating layout and designs.

2. Utilization JavaScript

- Writing code to display the current date.
- Writing code to retrieve the user's current latitude and longitude.
- Using fetch to retrieve Weather API data, handling data in try, and error in catch.
- Handling errors from fetch, redirecting to an error page, and allowing refresh using window.location.reload().
- Using toLowerCase in live search to convert input values to lowercase and using include to filter lists that contain the word.

3. Using React

- Structuring designed content into Components for better management and reusability.
- Using useEffect to dynamically load different types of APIs based on the State value.
- Using Array.map to repeat Components and showing a limited number of items using slice.
- Changing State values based on onFocus, onBlur for focusing events.
- Applying CSS effects using the ternary operator in the className attribute.

4. Using Redux

- Providing State to Components that need it via Provider and store.
- Using useDispatch to provide type and payload values to the reducer's action argument.
- Changing state values using type and payload with a switch statement.
- Using applyMiddleware with thunk to handle asynchronous operations like fetch.
- Dispatching data received at the Middleware to the reducer again using useDispatch to handle asynchronous operations.
- Combining reducers managing the State using combineReducers and providing them as an object.
- Using useSelector to use the saved State values in all components.

5. Utilizing Sass (SCSS)

- Using Sass (SCSS) to pre-store CSS forms in variables and conveniently manage CSS by writing parent and child CSS together.

6. Loading Skeleton and Error Handling

- Using NPM loading skeletons to show skeleton images during loading and switching to an error screen in case of errors.

## Preview of Completed Project  
Demo : https://hopenorain.netlify.app

## Tech Stack

- Complete the site using ![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23FDF1C&color=%23FFCE5A) and ![React](https://img.shields.io/badge/-React-222222?style=for-the-badge&logo=react).
- Manage the state using ![Redux](https://img.shields.io/badge/-Redux-purple?style=for-the-badge&logo=Redux).
- Handle asynchronous tasks through actions using Redux Middleware.
- Manage ![CSS3](https://img.shields.io/badge/-CSS3-007ACC?style=for-the-badge&logo=css3) using ![SCSS](https://img.shields.io/badge/-SCSS-F7EAF3?style=for-the-badge&logo=SASS).
- Utilize React loading skeletons to display skeleton UI to users while fetching data from an API during loading.
- Manage files using ![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=ffffff) and ![Github](https://img.shields.io/badge/-github-121013?style=for-the-badge&logo=github&logoColor=white).
- Package the code, files, images, CSS files, etc. through the build process.

## Running and Finishing the Project

- Install React: `npx create-react-app title` || `create-react-app .(current folder)`
- Install Styled-Components:  `npm install styled-components`
- Create files for deployment environment: `npm run build`
- Create a static file serving program: `npm install -g serve (accessible in all paths on the current computer)`
- Serve the web application based on the build folder: `serve -s build`


## References for the Project

1. Redux official website (https://redux.js.org/introduction/getting-started/)
2. Redux combineReducers official documentation (https://ko.redux.js.org/api/combinereducers/)
3. Redux Middleware thunk provided (https://github.com/reduxjs/redux-thunk)
4. Resolve Sass(SCSS) installation error (https://xionwcfm.tistory.com/261) || (https://oddcode.tistory.com/197)
5. Loading skeleton provided (https://www.npmjs.com/package/react-loading-skeleton)
6. Live search code (https://no-yagun-yes-kaltae.tistory.com/m/3)

## Learned from the Project

### JavaScript

1. Provide the user's current location information.

```
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
    });
  };
```

2. Fetching API using fetch method

```
  const getWeatherByCurrentLocation = (latitude, longitude) => {
    dispatch(getWeatherByCurrentLocationAction.weatherByCurrentLocation(latitude, longitude));
  };

  function forecastByCurrentLocation(latitude, longitude) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: "LOADING" });

        let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        if (response.status !== 200 || response.ok === false) {
          throw new Error("error");
        }

        dispatch({ type: "FORECAST_WEATHER", payload: { data } });
        dispatch({ type: "UNLOADING" });
      } catch (error) {
        dispatch({ type: "ERROR", payload: { error } });
        dispatch({ type: "UNLOADING" });
      }
    };
  }
```

3. Selecting words entered in live search

```
  const [liveSearch, setLiveSearch] = useState(false);

  const filterLiveSearchList = liveSearchList.filter((city) => {
    return city.toLowerCase().includes(searchCity.toLowerCase());
  });
```

### React

1. Utilizing useEffect to make API calls based on State values.

```
  useEffect(() => {
    if (city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
      getForecastByCity();
    }
  }, [city]);
```

2. State value change based on onFocus and onBlur

```
  <input
    type="search"
    value={searchCity}
    onChange={(e) => setSearchCity(e.target.value)}
    onFocus={() => setLiveSearch(true)}
    onBlur={() => setLiveSearch(false)}
    placeholder="Search your city"
  />
```

3. Limit the number of maps through slice.

```
  {forecastWeather && forecastWeather.slice(0,5).map((forecast, index) => (
    <li key={index}>
      <div>
        <p>The forecast for the {dates + index}</p>
        <img
          src={
            forecast 
            ? process.env.PUBLIC_URL + `/image/weather${forecast.weather[0].icon}.svg` 
            : process.env.PUBLIC_URL + `/image/weather13d.svg`
          }
          alt="날씨 이미지"
        />
      </div>
      <p>The weather forecast predicts a temperature of {forecast ? forecast.main.temp : -1.05}°C, Humidity {forecast ? forecast.main.humidity : 65}%, Wind speed {forecast ? forecast.wind.speed : 2.5}ms It is expected by the Meteorological Administration.</p>
      <b>{forecast ? forecast.weather[0].main : "Snow"}</b>
    </li>
  ))}
```

4. Handling Loading Skeleton and Error After API Call

```
  if (loading) {
    <Skeleton width={"200px"} height={"40px"} baseColor="#222" highlightColor="#fff" />
  }

  if (error) {
    return <Error />;
  }
```

### Redux

1. Setting up Redux Initial Configuration

```
  // React-Redux
  import { Provider } from "react-redux";
  // Redux
  import { createStore } from "redux";
  import { applyMiddleware } from "redux";
  // Reducer
  import reducer from "./redux/combinedReducer";
  // Redux-Thunk
  import { thunk } from "redux-thunk";
  
  const store = createStore(reducer, applyMiddleware(thunk));
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
```

2. State management using Redux

```
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
```

3. Using React Middleware for Asynchronous API Handling

```
  function weatherByCurrentLocation(latitude, longitude) {
    return async (dispatch, getState) => {
      try {
        dispatch({ type: "LOADING" });
  
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f497d00bd8c5301f301474a97dfbfba3&units=metric`;
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
```

4. Redux combinedReducer

```
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
```

## What I got from this project

This project provided me with the opportunity to explore API calls for the first time. I had to consider how to present UI to users while loading the API and how to handle error scenarios when API calls fail. Additionally, this project was my first experience with Redux, allowing me to manage state asynchronously through reducers and middleware.

