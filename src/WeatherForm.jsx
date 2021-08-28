import React from 'react';

const WeatherForm = ({ getWeather }) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        getWeather(e);
        e.target.elements.city.value = '';
      }}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Enter a city..."
        name="city"
      />
      <button className="form__button" type="submit">
        <svg
          height="25px"
          version="1.1"
          viewBox="0 0 32 32"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            fill="none"
            fillRule="evenodd"
            id="Page-1"
            stroke="none"
            strokeWidth="1"
          >
            <g fill="#000" id="icon-111-search">
              <path d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z" />
            </g>
          </g>
        </svg>
      </button>
    </form>
  );
};

export default WeatherForm;
