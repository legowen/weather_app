import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities , selectedCity, handleCityChange }) => { 
    // received Array through props
  return (
    <div className="menu-container">
        <Button 
            variant={`${selectedCity == null ? "outline-warning" : "warning"}`} 
            onClick={() => handleCityChange("current")}>
                Current Location
        </Button>
        
            {cities.map((city) => (
        <Button
            variant={`${selectedCity == city ? "outline-warning" : "warning"}`} 
            onClick = { ()=> handleCityChange(city) } >
                {city} 
        </Button> // Create Buttons through the Array
                     // <WeatherButton does not have any of state, All from the App.js(Parents), When Click the button, It will get the city state from App.js
        ))}
    </div>
  );
};

export default WeatherButton