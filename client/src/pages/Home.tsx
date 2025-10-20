import BestSelling from "../components/BestSelling";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <main className="mx-6">
      <Hero />
      <NewArrivals />
      <BestSelling />
    </main>
  );
};

export default Home;
