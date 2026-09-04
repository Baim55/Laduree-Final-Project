import { useEffect } from "react";
import { Link } from "react-router";
import Features from "../components/Features";
import { useLanguage } from "../context/LanguageContext";

function EugenieFlavors() {
  const { t } = useLanguage();
  const flavors = [
    {
      id: "blackcurrant-violet",
      name: "Blackcurrant Violet",
      desc: "A crisp white chocolate shell, a violet and blackcurrant caramel center, and a sablé biscuit.",
      badge: "Limited edition",
      badgeColor: "bg-[#f87171] text-white",
      allergens:
        "Nuts (almonds), milk, egg. May contain traces of other nuts, gluten, fish, and peanuts.",
      image: "/assets/img/Laduree_15-12-22_pmonetta-6418.webp",
    },
    {
      id: "apple-tatin",
      name: "Apple Tatin",
      desc: "A crisp Dulcey chocolate shell, an apple caramel center, and a sablé biscuit.",
      badge: "Limited edition",
      badgeColor: "bg-[#f87171] text-white",
      allergens: "Nuts (almonds), milk, egg, sulphites.",
      image: "/assets/img/TATIN_APPLE_EUGENIE_4_Pierre_Monetta_20-06-2024.webp",
    },
    {
      id: "grapefruit-mint",
      name: "Grapefruit Mint",
      desc: "A grapefruit white chocolate shell with a mint grapefruit heart and white chocolate coated shortbread biscuit.",
      badge: "Casablanca x Ladurée",
      badgeColor: "bg-[#86efac] text-[#064e3b]",
      allergens: "Nuts (almond), milk, egg",
      image: "/assets/img/LADUREE_10-04-26_pmonetta-9421-2.webp",
    },
    {
      id: "chocolate",
      name: "Chocolate",
      desc: "A crunchy dark chocolate shell, a caramel heart with Nyangbo 68% chocolate and shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/Laduree_15-12-22_pmonetta-6180.webp",
    },
    {
      id: "vanilla",
      name: "Vanilla",
      desc: "A crunchy white chocolate shell with vanilla pearls, a melting Madagascar vanilla heart, and a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/Laduree_15-12-22_pmonetta-6282.webp",
    },
    {
      id: "pistachio",
      name: "Pistachio",
      desc: "A crispy white chocolate shell, a praline heart with pistachio and salt flower, a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/laduree_01-12-22_pmonetta-4741_4.webp",
    },
    {
      id: "caramel",
      name: "Caramel",
      desc: "A crunchy milk chocolate shell, a caramel heart with salt flower, a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/Laduree_15-12-22_pmonetta-6216_1.webp",
    },
    {
      id: "rose",
      name: "Rose",
      desc: "A crunchy white chocolate shell, a melting rose and lychee heart, a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/Laduree_15-12-22_pmonetta-6409_1.webp",
    },
    {
      id: "strawberry",
      name: "Strawberry",
      desc: "The delicacy of a white chocolate shell combined with a strawberry jam centre and shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/LADUREE_WEB_06-23_pmonetta-0137_4.webp",
    },
    {
      id: "hazelnut",
      name: "Hazelnut",
      desc: "A crunchy milk chocolate shell with a hazelnut praline centre and a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/LADUREE_WEB_06-23_pmonetta-0125_5.webp",
    },
    {
      id: "passion-fruit",
      name: "Passion",
      desc: "A white chocolate shell, a passion fruit heart, and a shortbread biscuit.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Nuts (almond), milk, egg.",
      image: "/assets/img/products/LADUREE_24-05-23_pmonetta-6821_3.webp",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[900px] px-6 pt-16 pb-14 text-center">
        <h1 className="text-[44px] uppercase tracking-[0.1em] text-[#2e2c2a] sm:text-[64px]">
          {t("eugenieFlavorsTitle")}
        </h1>
        <p className="mx-auto mt-4 max-w-[650px] text-[15px] italic text-[#5c5752] sm:text-[17px]">
          {t("eugenieFlavorsDesc")}
        </p>
      </div>
      <div className="garamond mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <div className="h-[200px] w-full flex-shrink-0 overflow-hidden bg-[#faf6ec] sm:h-[250px] sm:w-[250px]">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-start">
                <span
                  className={`px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${flavor.badgeColor}`}
                >
                  {flavor.badge}
                </span>
                <h3 className="mt-2 text-[26px] text-[#2e2c2a]">
                  {flavor.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5c5752]">
                  {flavor.desc}
                </p>
                <div className="mt-4 border-t border-[#eee8dc] pt-3 w-full">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#706b66]">
                    {t("allergensText")}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#2e2c2a]">
                    {flavor.allergens}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] py-20 px-6 text-center">
        <div className="mx-auto max-w-[800px] garamond">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66] mb-4">
            {t("eugenieSubDesc")}
          </p>
          <h2 className="text-[32px] md:text-[44px] text-[#2e2c2a] leading-snug">
            {t("eugenieBottomDesc")}
          </h2>
        </div>
      </div>

      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          {t("homeLink")}
        </Link>
        <span className="mx-2">•</span>
        <span>{t("eugenieFlavorsLinkText")}</span>
      </div>
    </div>
  );
}

export default EugenieFlavors;
