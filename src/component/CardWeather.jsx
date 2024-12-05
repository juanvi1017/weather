import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
// api
import { get } from '../apirest';

import './style.css'

export default function CardWeather({ city }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getWeather = useCallback(async (city) => {
    setLoading(true)
    const response = await get(`http://api.weatherapi.com/v1/current.json?key=8ac946860874467ea8f140825242811&q=${city}&aqi=no&lang=es`)
    if (response.status === 200) {
      setData(response.data);
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    getWeather(city)
  }, [getWeather]);

  return (
    !loading && (
      <div className="weather-card">
        <div className="weather-info">
          <h1 className="temperature">{data.current.temp_c}°</h1>
          <p className="weather-condition">{data.current.condition.text}</p>
          <p className="details">Viento {data.current.wind_kph} / kph</p>
          <p className="details">Humedad {data.current.humidity}%</p>
          <p className="details">{data.location.name} / {data.location.region}</p>
        </div>
        <div className="weather-illustration">
          <img
            className="weather-illustration-icon"
            src={`http:${data.current.condition.icon}`}
            alt={data.current.condition.text}
          />
          <div className="person">
          </div>
        </div>
      </div>
    )
  );
}
