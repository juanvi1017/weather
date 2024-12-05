import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
// api
import { get } from './apirest';

import CardWeather from './component/CardWeather';
import CardWeatherPage from './component/CardWeatherPage';
import Footer from './component/Footer/Footer';

const city = ['Barranquilla', 'Bogota', 'Cali', 'Medellin']
const listCity = ['Medellin', 'Cali', 'Cartagena', 'Soacha', 'Cucuta', 'Soledad', 'Bucaramanga',
  'Bello', 'Valledupar', 'Villavicencio', 'Santa Marta', 'Ibague', 'Monteria', 'Pereira', 'Manizales',
  'Pasto', 'Neiva', 'Palmira', 'Popayan', 'Buenaventura', 'Armenia', 'Floridablanca', 'Sincelejo',
  'Itagui', 'Tumaco', 'Envigado', 'Dosquebradas', 'Tulua', 'Barrancabermeja', 'Riohacha', 'Quito',
  'Madrid', 'New york', 'Paris', 'Buenos Aires', 'Lima', 'Caracas', 'London', 'Roma'];

function App() {

  const [data, setData] = useState('')
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  const getWeather = useCallback(async (city) => {
    setLoading(true)
    const response = await get(`https://api.weatherapi.com/v1/current.json?key=8ac946860874467ea8f140825242811&q=${city}&aqi=no&lang=es`)
    if (response.status === 200) {
      setInfo(response.data);
    }
    setLoading(false)
  }, [])

  const handleChange = (event) => {
    setData(event.target.value)
  }

  useEffect(() => {
    if (data !== '') {
      getWeather(data)
    }
  }, [getWeather, data]);


  return (
    <div className='section-card'>
      {city.map((value, item) => (
        <CardWeather key={item} city={value} />
      ))}
      <form style={{ width: '60%' }}>
        <label>Seleccione ciudad</label>
        <select id="country" name="country" onChange={handleChange}>
          <option defaultValue='Barranquilla'>Barranquilla</option>
          {listCity.map((info, index) => (
            <option value={info} key={index}>{info}</option>
          ))}
        </select>
      </form>
      {data !== '' && (
        <CardWeatherPage data={info} loading={loading} />
      )}
      <Footer />
    </div>
  )
}

export default App
