import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

const App = () => {
  const [data, setData] = useState(() => {
    const weatherCity = localStorage.getItem('city');
    if (weatherCity) {
      return JSON.parse(weatherCity);
    } else {
      return '';
    }
  });

  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(data));
  }, [data]);

  const getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    if (city) {
      document.body.style.backgroundImage = `url(https://source.unsplash.com/1600x900/?${city})`;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=24f96b205178b42e54b895018d717b83`
        )
        .then(({ data }) => {
          setData(data);
        });
    }
  };

  return (
    <div className="app">
      <WeatherForm getWeather={getWeather} />
      <WeatherInfo data={data} />
    </div>
  );
};

export default App;
