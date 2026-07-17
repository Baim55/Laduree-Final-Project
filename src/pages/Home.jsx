import Collection from "../components/Collection";
import Hero from "../components/Hero";
import LaMaison from "../components/LaMaison";
import TailorMadeBox from "../components/TailorMadeBox";

function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <TailorMadeBox />
      <LaMaison />
    </div>
  );
}

export default Home;
