export default function WeatherCard({ data }) {

  return (
    <div className="weather-card border rounded-sm">
      <h2 className="text-4xl font-extrabold bg-black text-white w-full px-8 py-2">Weather Information:</h2>
      <div className="p-4 text-center">        
        <h2 className="text-2xl font-bold italic p-2">
          {`${data.city}, ${data.country} `} 
        </h2>
        <p><span className="font-bold">Temperature:</span> {data.temperature}</p>
        <p><span className="font-bold">Feels Like:</span> {data.feelsLike}</p>
        <p><span className="font-bold">Humidity:</span> {data.humidity}%</p>
        <p><span className="font-bold">Weather:</span> {data.weather}</p>
        <p> <span className="font-bold">Windspeed:</span> {data.windSpeed}</p>
      </div>
    </div>
  )
}