import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location} &limit=40&appid=60d92dab10769db3990d2362a7b6ec96`;
const url=`https://api.openweathermap.org/data/2.5/weather?q= ${location} &appid=60d92dab10769db3990d2362a7b6ec96`
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const response = axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        // response.data.forEach((location, index) => {
        //   const name = location.name;
        //   console.log(`Location ${index + 1}: ${name}`);
        // });
    
      });
      setLocation('')
    }
  };
  
return(
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.length > 0 ? data.timezone : ""} </p>
            {/* <p>{data.name}</p> */}
            <p>{data.name}, {data.sys.country}</p>
          </div>
          <div className="temp">
           {/* <h1>65°F</h1>  */}
           <h1>{data.main ? `${Math.round(data.main.temp)}°F` : ""}</h1>
          </div>
          <div className="description">
          <p>{data.weather ? data.weather[0].description : ""}</p> 
          </div>
        </div>

        
          <div className="bottom">
            <div className="feels">
               <p className='bold'>{data.main ? `${Math.round(data.main.feels_like)}°F` : ""}</p> 
              <p>Feels Like</p>
            </div>
            <div className="humidity">
             <p className='bold'>{data.main ? `${data.main.humidity}%` : ""}</p> 
              <p>Humidity</p>
            </div>
            <div className="wind">
            <p className='bold'>{data.wind ? `${data.wind.speed} MPH` : ""}</p> 
              <p>Wind Speed</p>
            </div>
          </div>
        



      </div>
    </div>
  );
}

export default App;
