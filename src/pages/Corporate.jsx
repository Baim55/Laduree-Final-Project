import { Link } from "react-router";
import Features from "../components/Features";
import { useLanguage } from "../context/LanguageContext";

function Corporate() {
  const { t } = useLanguage();

  const corporateBanners = [
    {
      id: 1,
      title: t("corporateBanner1Title"),
      link: "/shop/corporate-gifts",
      image: "/assets/img/LADUREE_24-10-2024_pmonetta-7852_1.jpg",
    },
    {
      id: 2,
      title: t("hotelsTitle"),
      link: "/shop/supplier",
      image:
        "/assets/img/offre.jpg",
      isPreLine: true,
    },
    {
      id: 3,
      title: t("personalizedGiftsTitle"),
      link: "/shop/customized",
      image:
        "/assets/img/Ambiance_Patisseries_crea_Julien_Alvarez_1_Pierre_Monetta_-_20220128_8_fffd44b7-a5fa-4f1c-8057-2f748c5ce2b8.jpg",
    },
    {
      id: 4,
      title: t("spacesForEventsTitle"),
      link: "/shop/events-catering",
      image: "/assets/img/LADUREE_24-10-2024_pmonetta-7395_1_feccfeea-3401-4f79-89ef-6074a1ba1c3f.jpg",
    },
  ];

  return (
    <div className="bg-[#fefbf4] pt-[92px]">
      {/* 1. Başlıq Hissəsi */}
      <section className="pt-20 px-6 text-center">
        <div className="mx-auto max-w-[900px]">
          <h1 className="garamond whitespace-pre-line text-[45px] font-semibold uppercase leading-[1.15] text-[#2e2c2a] sm:text-[65px] lg:text-[75px] tracking-wide">
            {t("corporateMainTitle")}
          </h1>
        </div>
      </section>

      {/* 2. Oval Şəkil Hissəsi */}
      <section className="pb-16 px-6">
        <div className="mx-auto mt-10 max-w-[480px] overflow-hidden rounded-t-[240px] p-1 shadow-xs">
          <img
            src="/assets/img/corporate_orders.webp"
            alt="The Art of Gifting"
            className="h-[650px] w-full rounded-t-[235px] object-cover object-center"
          />
        </div>
      </section>

      {/* 3. Açıqlama və Düymə */}
      <section className="pb-24 px-6 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="garamond text-[17px] leading-relaxed text-[#46413de3] sm:text-[18px]">
            {t("salesTeamDesc")}
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block garamond border border-[#2e2c2a] px-20 py-3 text-[14px] uppercase tracking-widest text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white"
            >
              {t("requestAQuote")}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Başlıq: Explore all our offers */}
      <section className="py-16 text-center border-t border-[#e5dfd5]">
        <span className="garamond italic text-[18px] text-[#706b66]">
          {t("giftsAndExperiences")}
        </span>
        <h2 className="garamond mt-3 text-[38px] uppercase text-[#2e2c2a] sm:text-[52px]">
          {t("exploreAllOffers")}
        </h2>
      </section>

      {/* 5. Şəkilli Bannerlər (Map ilə dinamik) */}
      <section>
        {corporateBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative h-[100vh] min-h-[450px] w-full overflow-hidden flex items-center justify-center text-center group cursor-pointer"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10 max-w-[800px] px-6 text-white">
              <h3
                className={`garamond text-[38px] uppercase tracking-wide sm:text-[74px] mb-6 font-normal ${
                  banner.isPreLine ? "whitespace-pre-line leading-tight" : ""
                }`}
              >
                {banner.title}
              </h3>
              <Link
                to={banner.link}
                className="inline-block garamond bg-white px-30 py-3 text-[14px] uppercase text-black transition hover:bg-[#dce7c6] hover:text-black"
              >
                {t("discover")}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 text-center px-6 max-w-[800px] mx-auto border-t border-[#e5dfd5]">
        <p className="garamond text-[18px] leading-relaxed text-[#46413de3] sm:text-[20px]">
          {t("salesTeamSupport")}
        </p>
      </section>

      <Features />

      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          {t("home")}
        </Link>
        <span className="mx-2">•</span>
        <span>{t("corporate")}</span>
      </div>
    </div>
  );
}

export default Corporate;