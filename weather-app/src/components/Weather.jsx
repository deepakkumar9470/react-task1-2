
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchweatherAction } from '../features/weatherSlice'
import './Weather.css'
import sun from '../images/sun.png'
import moment from 'moment'


const Weather = () => {

  const [city, setCity] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  const { weather, loading, error } = state


  return (
        <div className="weather_Container">
          <h1>Weather App

            <p className="para">Find out the current weather by city name</p>

          </h1>

          <div className="form_Container">

            <input

              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              name="city"
              placeholder="Search by city name.."
            />
            <button
              onClick={() => dispatch(fetchweatherAction(city))}
              className="searchButton">
              Search
            </button>

          </div>


          {loading ? (<h1 style={{ textAlign: 'center', color: '#cfcccc', marginTop: '60px' }}>Loading Please wait..</h1>) : (
            <div className="temp_Container">
              <div className="topTemp_layer">
                <p className="day">{moment().format('dddd')}</p>
                <p className="day">{moment().format('LL')}</p>
              </div>

              <div className="toptemp">
                <p>
                  {Math.ceil(Number(weather?.main.temp)) / 10} <sup>0</sup> <span className="celcius">C</span>
                </p>

                <div className="city">
                  <img
                    src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` ?
                      `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png` : sun}
                    alt="icon" />
                  <span>{weather?.name}</span>

                </div>

                <div className="max_min_temp">
                  <div className="max_min">

                    <span>{Math.ceil(Number(weather?.main.temp_max)) / 10} &deg;C </span>/
                    <span>{Math.ceil(Number(weather?.main.temp_min)) / 10} &deg;C </span>

                  </div>

                  <p className="condition">{weather?.weather[0].main}</p>
                </div>


              </div>


            </div>
          )}


        </div>
  )
}

export default Weather
