import { useEffect , useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  {Container}  from "react-bootstrap";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";


// 1. When start the app, UI display current location's weather info
// 2. In the box : location, C, F and weather status showing up
// 3. bottom button = 5 buttons (1 for current location, 4 are optional)
// 4. When click each city = Desplay the each city's weather
// 5. If click the current location button, It will be back to current location's weather
// 6. During download data = loading spinner display on the UI 

const cities = ['seoul', 'new york', 'toronto', 'Los Angeles'] // Created Array - cities
const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {

  const [weather, setWeather] = useState(null); 

  const [city, setCity] = useState('');

  const [loading,setLoading] = useState(false);

  const [apiError, setAPIError] = useState("");

  

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
        let lat = position.coords.latitude //latitude
        let lon = position.coords.longitude //longtitude
        getWeatherByCurrentLocation(lat,lon)
    } );
  };

  const getWeatherByCurrentLocation = async(lat,lon) => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b0375d4c3f10507973fdbf77c54c60e&units=metric`;
      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false)
    } catch (error) {
      setAPIError(error.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b0375d4c3f10507973fdbf77c54c60e&units=metric`
      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (error){
      setAPIError(error.message);
      setLoading(false);
    }
  }

  useEffect( () => {
    if (city == ""){
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
  },[city]); // useEffect = Component did update, State를 주시하다 바뀌면 호출해줌

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };



  return (
    <>
      <Container className="vh-100">
        {loading ? (
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : !apiError ? (
          <div className="main-container">
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </div>
        ) : (
          apiError
        )}
      </Container>
    </>
  );
};

export default App;
