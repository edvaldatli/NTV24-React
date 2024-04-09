// Components
import Review from "./components/Review";
import Header from "./components/Header";
import Reviews from "./components/Reviews.server";

function Home() {
  return (
    <>
      <Header />
      <Reviews />
    </>
  );
}

export default Home;
