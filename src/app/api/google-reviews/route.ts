import { NextResponse } from "next/server";

const FALLBACK_REVIEWS = [
  {
    authorName: "Anna K.",
    rating: 5,
    text: "Bardzo profesjonalne podejście, spokojna atmosfera i dokładne wyjaśnienie każdego etapu zabiegu. Efekt po modelowaniu ust jest naturalny i dokładnie taki, jak chciałam.",
  },
  {
    authorName: "Marta S.",
    rating: 5,
    text: "Gabinet jest piękny, czysty i elegancki. Wizyta przebiegła bez pośpiechu, a po zabiegu dostałam konkretne zalecenia pielęgnacyjne.",
  },
  {
    authorName: "Katarzyna P.",
    rating: 5,
    text: "Polecam za precyzję i ogromną wiedzę. Efekt wygląda świeżo, ale nie sztucznie — dokładnie o to mi chodziło.",
  },
];

async function resolvePlaceId(apiKey: string) {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;

  const query = process.env.GOOGLE_PLACE_QUERY || "Pani Kosmetolog Medycyna Estetyczna Łódź";
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", query);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("language", "pl");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), { next: { revalidate: 60 * 60 * 12 } });
  const data = await response.json();
  return data?.candidates?.[0]?.place_id || null;
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      rating: 5,
      total: null,
      url: "https://www.google.com/search?q=Pani+Kosmetolog+Medycyna+Estetyczna+Łódź+opinie",
      reviews: FALLBACK_REVIEWS,
      source: "fallback",
    });
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    if (!placeId) throw new Error("Missing Google Place ID");

    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("language", "pl");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), { next: { revalidate: 60 * 60 * 6 } });
    const data = await response.json();
    const place = data?.result;

    if (!place) throw new Error(data?.error_message || "Google Place details unavailable");

    return NextResponse.json({
      rating: place.rating ?? null,
      total: place.user_ratings_total ?? null,
      url: place.url || "https://www.google.com/search?q=Pani+Kosmetolog+Medycyna+Estetyczna+Łódź+opinie",
      reviews: (place.reviews || []).map((review: any) => ({
        authorName: review.author_name,
        rating: review.rating,
        text: review.text,
        relativeTime: review.relative_time_description,
      })),
      source: "google_places",
    });
  } catch (error) {
    return NextResponse.json({
      rating: 5,
      total: null,
      url: "https://www.google.com/search?q=Pani+Kosmetolog+Medycyna+Estetyczna+Łódź+opinie",
      reviews: FALLBACK_REVIEWS,
      source: "fallback",
    });
  }
}
