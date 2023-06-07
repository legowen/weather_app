import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities , setCity }) => { 
    // received Array through props
  return (
    <div>
        <Button variant="warning">Current Location</Button>
        
        {cities.map((item, index) => (
            <Button
                    variant="warning" key = {index} onClick = { ()=> setCity(item) } >
                {item} 
            </Button> // Create Buttons through the Array
                     // <WeatherButton does not have any of state, All from the App.js(Parents), When Click the button, It will get the city state from App.js
        ))}
    </div>
  )
}

export default WeatherButton