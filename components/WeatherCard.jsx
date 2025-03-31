export default function WeatherCard({ data }) {

  return (
    <div className="weather-card">
      <h2>
        {data.city}
      </h2>
      <p>Temperature: {data.temperature}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Weather: {data.weather}</p>
      <p>Windspeed: {data.windSpeed}</p>
    </div>
  )
}