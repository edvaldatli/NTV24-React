import PocketBase from "pocketbase";

export async function fetchReviews() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/reviews/records"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
