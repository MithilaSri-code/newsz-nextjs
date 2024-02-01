
"use client"; 
import "./weather.css";
import { Button, Grid, Menu, MenuItem } from "@mui/material";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = '73eb4ca6f160d620b27ede3af92b7499'; // Your API key
const city = 'Colombo';



interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        main: string;
        description: string;
    }[];
}

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const API_KEY = '73eb4ca6f160d620b27ede3af92b7499';
    const city = 'Colombo'; 

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${'Colombo'}&appid=${'73eb4ca6f160d620b27ede3af92b7499'}&units=metric`);
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []);

    return (
        <Grid container className="weather">
            {weatherData && (
                <div className="weather0"  >
                    <div className="weather1">
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    </div>
                    <div className="weather2">
                    <p>Weather: {weatherData.weather[0].main}</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    </div>
                </div>
            )}
        </Grid>
    );
};

export default WeatherComponent;