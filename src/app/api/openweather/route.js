import axios from "axios";

export async function GET(req) {
  // Determine the base URL dynamically
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fullUrl = new URL(req.url, baseURL); // Use base URL for parsing

  const city = fullUrl.searchParams.get("city") || "Toronto"; 
  const country = fullUrl.searchParams.get("country") || "CA";

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    return new Response(
      JSON.stringify([{
        id: response.data.id,
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        weather: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,
      }]),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}