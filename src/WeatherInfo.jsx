import React from 'react';

const WeatherInfo = ({ data }) => {
  return (
    <div className="weather-info">
      {data && (
        <>
          <div className="weather-info__description">
            {data.weather[0].description}
          </div>
          <div className="weather-info__city">{data.name}</div>
          <div className="weather-info__temp">
            {Math.round(data.main.temp)}
            <span>&#8451;</span>
          </div>
          <img
            className="weather-info__icon"
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="weather icon"
          />
          <div className="weather-info__humidity">
            Humidity: <span>{data.main.humidity}%</span>
          </div>
          <div className="weather-info__wind">
            Wind Speed: <span>{data.wind.speed} km/h</span>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
