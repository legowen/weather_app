import React from 'react'

const WeatherBox = ({ weather }) => {
    
    console.log(weather?.weather)
// {weather?.name} => 삼항연산식
  return (
    <div className = "weather-box">
        <div>{weather?.name}</div> 
        <h2>{weather?.main.temp}/{weather?.main.temp}</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox