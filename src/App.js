import { useEffect , useState } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";


// 1. When start the app, UI display current location's weather info
// 2. In the box : location, C, F and weather status showing up
// 3. bottom button = 5 buttons (1 for current location, 4 are optional)
// 4. When click each city = Desplay the each city's weather
// 5. If click the current location button, It will be back to current location's weather
// 6. During download data = loading spinner display on the UI 

function App() {

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
        let lat = position.coords.latitude //latitude
        let lon = position.coords.longitude //longtitude
        getWeatherByCurrentLocation(lat,lon)
    } );
  };

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b0375d4c3f10507973fdbf77c54c60e`
    let response = await fetch(url)
    let data = await response.json();
    console.log("data",data)
  };

  useEffect( () => {
    getCurrentLocation()
  },[])

  return (
    <div>
      <div class="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
