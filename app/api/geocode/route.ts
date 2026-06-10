import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=4`,
      {
        cache: 'no-store', 
        headers: {
          'User-Agent': 'GetAlong_Neighborhood_App (hello@getalong.dev)',
          'Accept-Language': 'en-US,en;q=0.9',
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`OpenStreetMap rejected with status ${response.status}:`, errorText);
      throw new Error(`OSM Server Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error("🔥 Backend Proxy Error:", error);
    return NextResponse.json({ error: 'Failed fetching from OSM' }, { status: 500 });
  }
}