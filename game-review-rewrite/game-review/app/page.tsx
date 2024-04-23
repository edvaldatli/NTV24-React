"use client";
import { Suspense } from "react";
import Reviews from "./components/allReviews";

export default function Home() {
  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>
        <Reviews />
      </Suspense>
    </>
  );
}
