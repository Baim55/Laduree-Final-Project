import Adress from "../components/Adress";
import Collection from "../components/Collection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LaMaison from "../components/LaMaison";

function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <LaMaison />
      <Adress />
      <Features/>
    </div>
  );
}

export default Home;
