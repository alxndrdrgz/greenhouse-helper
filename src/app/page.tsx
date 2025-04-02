 'use client'
 import { useEffect, useState } from "react";
 import WeatherCard from '../../components/WeatherCard';
 import PlantCard from '../../components/PlantCard';


export default function Home() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [plantData, setPlantData] = useState([]);

  // useEffect hook for fetching OpenWeather data
  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch("/api/openweather");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        setWeatherData(data);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch("/api/trefle");
        if (!res.ok) throw new Error("No plants!");
        const data = await res.json();
        console.log(data.plants);
        setPlantData(data.plants || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
            {!loading && weatherData.length > 0 ? (
              weatherData.map((weather) => <WeatherCard key={weather.id} data={weather} />)
              ) : (
          <p>Loading...</p>
           )}
        </div>
        <div>
          {plantData.length > 0 ? ( 
            plantData.map((plant) => <PlantCard key={plant.id} data={plant}/>)) : (
            <p>hold on...</p>  
            ) }
        </div>
       </main> 
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        site created and designed by Alex Rodriguez-Sta. Ana
      </footer>
    </div>
  );
}
