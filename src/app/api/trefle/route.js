import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const commonName = searchParams.get("commonName") || "tomato"


    if (!commonName) {
      return Response.json({ error: "Missing common name"})
    }

    const TREFLE_API_URL = `https://trefle.io/api/v1/plants`;

    const response = await axios.get(TREFLE_API_URL, {
      params: {
        token: process.env.TREFLE_API_KEY,
        "filter[common_name]": commonName,
      },
    })
    

    if (!response.data || !response.data.data) {
      throw new Error("Invalid response from API");
    }
    

    // Convert the API data object into an array of key-value pairs
    const dataArray = response.data.data.map((plant) => ({
      id: plant.id,
      common_name: plant.common_name,
      scientific_name: plant.scientific_name,
      family: plant.family,
      image_url: plant.family.image_url || "",
    }));

    return new Response(JSON.stringify({ plants: dataArray}), {
      status: 200,
      headers: {"Content-Type": "applications/json"}
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" }}
    )
  }
}