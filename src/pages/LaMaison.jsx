import { Link } from "react-router";
import Features from "../components/Features";

function LaMaison() {
  const sections = [
    {
      id: "patisserie",
      title: "PATISSERIE KNOW-HOW\nSINCE 1862",
      link: "/la-maison/know-how",
      image: "/assets/img/house.jpg",
    },
    {
      id: "legacy",
      title: "LEGACY",
      link: "/la-maison/legacy",
      image: "/assets/img/atelier.jpg",
    },
    {
      id: "experiences",
      title: "EXPERIENCES",
      link: "/la-maison/experiences",
      image: "/assets/img/LADUREE_20-02-25_pmonetta-6301.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="flex flex-col">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative flex h-screen min-h-[500px] w-full items-center justify-center overflow-hidden"
          >
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/35" />
            <div className="garamond relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center text-white">
              <h2 className="whitespace-pre-line text-[44px] uppercase tracking-[0.15em] sm:text-[60px] lg:text-[72px]">
                {section.title}
              </h2>
              <Link
                to={section.link}
                className="mt-8 border border-white bg-[#fefbf4] px-12 py-3 text-[14px] uppercase tracking-[0.15em] text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white"
              >
                Discover
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <span>La Maison</span>
      </div>
    </div>
  );
}

export default LaMaison;
