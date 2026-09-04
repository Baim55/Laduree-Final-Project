import { Link } from "react-router";
import Features from "../components/Features";
import { useLanguage } from "../context/LanguageContext";

function MacaronFlavors() {
  const { t } = useLanguage();
  const flavors = [
    {
      id: "grapefruit-mint",
      name: "Grapefruit Mint",
      desc: "Two macaron shells filled with a mint-infused grapefruit jam",
      badge: "Casablanca x Ladurée",
      badgeColor: "bg-[#86efac] text-[#064e3b]",
      allergens: "Almond, Egg",
      image: "/assets/img/LADUREE_10-04-26_pmonetta-9413.avif",
    },
    {
      id: "vanilla",
      name: "Vanilla",
      desc: "Two almond vanilla macaron shells filled with a vanilla-flavored creamy filling.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Soy, Egg, Milk, Tree Nuts, Almond",
      image: "/assets/img/laduree_18-01-23_pmonetta-7054.webp",
    },
    {
      id: "pistachio",
      name: "Pistachio",
      desc: "Two almond pistachio macaron shells filled with pistachio-flavored buttercream.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Almond, Pistachio, Tree Nuts",
      image: "/assets/img/laduree_18-01-23_pmonetta-7089.avif",
    },
    {
      id: "chocolate",
      name: "Chocolate",
      desc: "Two almond chocolate macaron shells filled with chocolate ganache.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Almond, Tree Nuts",
      image: "/assets/img/LADUREE_24-02-23_pmonetta-8768_c88409cc-7252-4823-ace0-01aeb9a3769e.avif",
    },
    {
      id: "raspberry",
      name: "Raspberry",
      desc: "Two almond macaron shells filled with raspberry jam.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Almond, Tree Nuts",
      image: "/assets/img/LADUREE_24-02-23_pmonetta-8726_1.avif",
    },
    {
      id: "caramel",
      name: "Caramel",
      desc: "Two almond macaron shells filled with salted caramel.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Almond, Tree Nuts",
      image: "/assets/img/laduree_18-01-23_pmonetta-7225.avif",
    },
    {
      id: "rose",
      name: "Rose",
      desc: "Two almond macaron shells filled with a rose-flavored creamy filling.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Almond, Tree Nuts",
      image: "/assets/img/LADUREE_24-05-23_pmonetta-6495.avif",
    },
    {
      id: "orange-blossom",
      name: "Orange blossom",
      desc: "Two almond macaron shells filled with an orange blossom-flavored creamy filling.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Tree Nuts, Almond, Soy",
      image: "/assets/img/Macaron_fleur_d_oranger_vertical.avif",
    },
    {
      id: "lemon",
      name: "Lemon",
      desc: "Two macaron shells filled with a creamy filling made from lemon (zest, pith, flesh, juice).",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Tree Nuts, Almond, Soy",
      image: "/assets/img/LADUREE_24-02-23_pmonetta-8674.avif",
    },
    {
      id: "almond",
      name: "Almond",
      desc: "Two macaron shells made with roasted raw almonds, filled with a bitter almond cream.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Almond, Egg",
      image: "/assets/img/Ambiance_Macaron_Amande_7_Pierre_Monetta_-_20220225.avif",
    },
    {
      id: "coffee",
      name: "Coffee",
      desc: "Two coffee macaron shells filled with a creamy filling infused with roasted coffee beans.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Egg, Milk, Almond, Tree Nuts",
      image: "/assets/img/laduree_18-01-23_pmonetta-7237.avif",
    },
    {
      id: "marie-antoinette-tea",
      name: "Marie-Antoinette tea",
      desc: "Two crispy macaron shells filled with a melting cream infused with Marie-Antoinette tea (black teas from China and India, rose, citrus, and honey).",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Milk, Egg, Almond, Tree Nuts",
      image: "/assets/img/laduree_18-01-23_pmonetta-7143.avif",
    },
    {
      id: "passion-fruit",
      name: "Passion fruit",
      desc: "Two macaron shells filled with a passion fruit-flavored creamy filling.",
      badge: "Iconic",
      badgeColor: "bg-[#dce7c6] text-[#2e2c2a]",
      allergens: "Milk, Egg, Almond, Tree Nuts",
      image: "/assets/img/LADUREE_13-12-23_pmonetta-5578.avif",
    },
  ];

  return (
    <div className="container bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[900px] px-6 pt-16 pb-14 text-center">
        <h1 className="text-[44px] uppercase tracking-[0.1em] text-[#2e2c2a] sm:text-[64px]">
          {t("macaronsFlavorsTitle")}
        </h1>
        <p className="mx-auto mt-4 max-w-[650px] text-[15px] italic text-[#5c5752] sm:text-[17px]">
          {t("macaronsFlavorsDesc")}
        </p>
      </div>
      <div className="garamond mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-[200px] w-full flex-shrink-0 overflow-hidden bg-[#faf6ec] sm:h-[250px] sm:w-[250px]">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col items-start">
                <span className={`px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${flavor.badgeColor}`}>
                  {flavor.badge}
                </span>
                <h3 className="mt-2 text-[26px] text-[#2e2c2a]">{flavor.name}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5c5752]">{flavor.desc}</p>
                <div className="mt-4 border-t border-[#eee8dc] pt-3 w-full">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#706b66]">
                    {t("allergensText")}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#2e2c2a]">{flavor.allergens}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] py-16">
        <div className="garamond mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66]">{t("lookingForGift")}</p>
            <h2 className="mt-3 text-[36px] uppercase tracking-wide text-[#2e2c2a] sm:text-[46px]">
              {t("customizeMacaronBox")}
            </h2>
            <div className="laduree-dotted-v my-8 hidden h-[60px] w-4 lg:block" />
            <Link
              to="/shop"
              className="inline-block border border-[#2e2c2a] bg-[#2e2c2a] px-10 py-3 text-[14px] uppercase tracking-widest text-white transition hover:bg-transparent hover:text-[#2e2c2a]"
            >
              {t("composeYours")}
            </Link>
          </div>
          <div className="overflow-hidden bg-[#faf6ec] shadow-sm">
            <img
              src="/assets/img/LADUREE_WEB_06-23_pmonetta-0477_13.webp"
              alt="Customize your macarons box"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] py-16">
        <div className="garamond mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 h-[380px] overflow-hidden bg-[#faf6ec] sm:h-[450px] lg:order-1">
            <img
              src="/assets/img/Chocolate_Laduree_Macaron.webp"
              alt="The Art of the Ladurée Macaron"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66]">{t("artOfMacaronSub")}</p>
            <h2 className="mt-3 text-[34px] uppercase tracking-wide text-[#2e2c2a] sm:text-[44px]">
              {t("artOfMacaronTitle")}
            </h2>
            <div className="laduree-dotted-v my-8 hidden h-[60px] w-4 lg:block" />
            <p className="text-[15px] leading-relaxed text-[#5c5752]">{t("artOfMacaronDesc")}</p>
            <div className="mt-8">
              <Link
                to="/la-maison/know-how"
                className="inline-block border border-[#2e2c2a] px-8 py-3 text-[14px] uppercase tracking-wider text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white"
              >
                {t("learnMoreMacarons")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">{t("homeLink")}</Link>
        <span className="mx-2">•</span>
        <span>{t("macaronFlavorsLinkText")}</span>
      </div>
    </div>
  );
}

export default MacaronFlavors;