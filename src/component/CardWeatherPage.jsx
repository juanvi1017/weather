import * as React from 'react';
import { Loading } from './Loading';

import './style.css'

export default function CardWeatherPage({ data, loading }) {

  return (
    <>
      {!loading && (
        <div className="weather-card-page">
          <div className="weather-info-page">
            <h1 className="temperature-page">{data.current.temp_c}°</h1>
            <p className="weather-condition-page">{data.current.condition.text}</p>
            <p className="details-page">Viento {data.current.wind_kph} / kph</p>
            <p className="details-page">Humedad {data.current.humidity}%</p>
            <p className="details-page">Nubocidad {data.current.cloud}%</p>
            <h2 className="details-page">{data.location.name} / {data.location.region}</h2>
            <h3 className="details-page">{data.location.country}</h3>
          </div>
          <div className="weather-illustration-page">
            <img
              className="weather-illustration-icon-page"
              src={`http:${data.current.condition.icon}`}
              alt={data.current.condition.text}
            />
            <div className="person">
              <p className="details-page">Presión {data.current.pressure_mb} mb</p>
              <p className="details-page">Indice UV {data.current.uv}</p>
            </div>
          </div>
        </div>
      )}
      <Loading open={loading} />
    </>
  );
}
