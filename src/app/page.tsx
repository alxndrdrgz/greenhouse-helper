 'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("/api/openweather");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setWeather(data);
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
          {
            weather ? (
              <div>
                <h1>{weather.name}</h1>
                <p>{weather.weather[0].description}</p>
              </div>
            ) : (
              <p>Loading weather...</p>
            )
          }
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
