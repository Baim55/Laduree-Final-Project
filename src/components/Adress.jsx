import { Link } from "react-router";
import AdressImg from "../../public/assets/img/ThibautVoisin-250110-Laduree-GaleriesLafayette-043.webp";

function Adress() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={AdressImg}
        alt="Ladurée Store"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="garamond max-w-[600px] text-center text-[50px] uppercase leading-[1.1] text-white md:text-[74px]">
          Our Adresses and Restaurants
        </h1>

        <Link
          to="/"
          className="garamond mt-9  bg-white px-30 py-3 text-[15px] text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white"
        >
          Discover Now
        </Link>
      </div>
    </section>
  );
}

export default Adress;
