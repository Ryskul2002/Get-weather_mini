import React, {useState} from 'react'
import Form from "./component/Form/Form";
import Weather from "./component/Weather/Weather";
import './App.css'

function App() {

  const [weather,setWeather] = useState({})
  const [city,setCity] = useState('')

  return (
    <div className="App">
          <div className="weather__block">
            <Form setWeather={setWeather} city={city} setCity={setCity}/>
            {Object.keys(weather).length === 0 ? <img className="weather__img" src="https://w7.pngwing.com/pngs/924/216/png-transparent-cloud-rain-cloudy-weather-s-for-kids-cloud-orange-weather-forecasting.png" alt=""/> : <Weather weather={weather}/>}
          </div>
    </div>
  );
}

export default App;
