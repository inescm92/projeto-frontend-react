import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';

function Weather() {
	const [weatherData, setWeatherData] = useState({});
	const [loading, setLoading] = useState(true);
	const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

	useEffect(() => {
		axios
			.get(`https://api.openweathermap.org/data/2.5/weather?q=LISBON&appid=${apiKey}`)
			.then(response => {
				setWeatherData(response.data);
				setLoading(false);
			})
			.catch(error => {
				console.error('Error fetching weather data: ', error);
				setLoading(false);
			});
	}, [apiKey]);

	if (loading) {
		return <div>Loading...</div>;
	}

	const temperatureInCelsius = (weatherData.main.temp - 273.15).toFixed(0);

	return (
		<div className='weather__container'>
			<div className='weather-data'>
				<div className='weather-icon'>
					<h2>
						<FontAwesomeIcon icon={faLocationDot} />
						<span className='city'>{weatherData.name}</span>
					</h2>
				</div>
				<div className='weather-temperature'>
					<p id='temperature'>
						<span>{temperatureInCelsius}&deg;C</span>
					</p>
				</div>
				<div className='description-container'>
					<img id='weather-icon' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='Condições atuais' />
					<p id='description'>{weatherData.weather[0].description}</p>
				</div>
				<div className='details-container'>
					<p id='humidity'>
						<FontAwesomeIcon icon={faDroplet} />
						<span>{weatherData.main.humidity}%</span>
					</p>
					<p id='wind'>
						<span>
							<FontAwesomeIcon icon={faWind} />
						</span>
						<span>{weatherData.wind.speed} m/s</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Weather;
