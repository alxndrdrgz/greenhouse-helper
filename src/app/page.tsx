 'use client'
 import { useEffect, useState } from "react";
 import WeatherCard from '../../components/WeatherCard';


export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/api/openweather");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        // Code below takes the data object received from the API and formats into an array that will make it easier to display in the WeatherCard component.
        const formattedData = [
          {
            id: data.id,
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            weather: data.weather[0].description,
            windSpeed: data.wind.speed,
          },
        ];

        // The red squiggly below is annoying and it'll be fixed with type declarations. Cool!
        setWeatherData(formattedData);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <h1>Weather Information</h1>
            {!loading && weatherData.length > 0 ? (
              weatherData.map((weather) => <WeatherCard key={weather.id} data={weather} />)
              ) : (
          <p>Loading...</p>
           )}
        </div>
       </main> 
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
