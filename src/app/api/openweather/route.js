import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=43.650108&lon=-79.382896&appid=${process.env.OPENWEATHER_API_KEY}`
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {"Content-Type": "application/json"},
    });
  } catch (error) {
    console.error("You messed up fetching this data:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "applications/json" },
    });
  }
}
