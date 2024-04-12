import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

export async function fetchReviews() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/reviews/records", {
    method: "GET"
  }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function deleteReview(id) {
  const res = await pb.collection('reviews').delete(id);

  if (!res.ok) {
    throw new Error('Failed to delete review');
  }
}

export async function addReview(title, content, imgpath, rating, reviewTitle) {
  const data = {
    "title": title,
    "content": content,
    "imgpath": imgpath,
    "rating": rating,
    "reviewTitle": reviewTitle
  }
  console.log('added review')
  const res = await pb.collection('reviews').create(data);

  if (!res.ok) {
    throw new Error('Failed to create review');
  }
}