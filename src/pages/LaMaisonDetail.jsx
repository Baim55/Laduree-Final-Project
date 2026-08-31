import { useParams, Link } from "react-router";
import Features from "../components/Features";

const MAISON_DATA = {
  "know-how": {
    title: "PATISSERIE KNOW-HOW",
    subtitle: "Heritage of Excellence Since 1862",
    image: "/assets/img/house.jpg",
    description:
      "For over 160 years, Maison Ladurée has preserved the highest standard of French pastry-making. Our chefs combine heritage techniques with innovative artistry to create delicate macarons, airy pastries, and iconic entremets.",
  },
  legacy: {
    title: "OUR LEGACY",
    subtitle: "The History of Rue Royale",
    image: "/assets/img/atelier.jpg",
    description:
      "In 1862, Louis Ernest Ladurée founded a bakery in the heart of Paris at 16 rue Royale. Transformed into one of the city's first prestigious tea salons, it quickly became a legendary meeting place for Parisian high society.",
  },
  experiences: {
    title: "LADURÉE EXPERIENCES",
    subtitle: "Restaurants, Tea Salons & Workshops",
    image: "/assets/img/LADUREE_20-02-25_pmonetta-6301.jpg",
    description:
      "Step into the enchanting atmosphere of Ladurée around the world. Whether savoring afternoon tea in our historical salons or booking a private pastry masterclass, every moment is crafted to be unforgettable.",
  },
};

function LaMaisonDetail() {
  const { slug } = useParams();
  const data = MAISON_DATA[slug] || MAISON_DATA["know-how"];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[850px] px-6 pt-16 pb-12 text-center">
        <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66]">
          La Maison Ladurée
        </p>
        <h1 className="mt-2 text-[40px] uppercase tracking-wide text-[#2e2c2a] sm:text-[54px]">
          {data.title}
        </h1>
        <p className="mt-2 text-[18px] italic text-[#8c857f]">
          {data.subtitle}
        </p>
      </div>
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="overflow-hidden bg-[#faf6ec] shadow-sm">
          <img
            src={data.image}
            alt={data.title}
            className="h-[450px] w-full object-cover sm:h-[550px]"
          />
        </div>
        <div className="garamond mx-auto max-w-[750px] py-16 text-center">
          <p className="text-[18px] leading-relaxed text-[#5c5752] sm:text-[20px]">
            {data.description}
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block border border-[#2e2c2a] bg-[#2e2c2a] px-10 py-3 text-[14px] uppercase tracking-widest text-white transition hover:bg-transparent hover:text-[#2e2c2a]"
            >
              Discover Our Creations
            </Link>
          </div>
        </div>
      </div>
      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <Link to="/la-maison" className="hover:underline">
          La Maison
        </Link>
        <span className="mx-2">•</span>
        <span>{data.title}</span>
      </div>
    </div>
  );
}

export default LaMaisonDetail;
