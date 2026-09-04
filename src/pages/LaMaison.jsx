import { Link } from "react-router";
import Features from "../components/Features";
import { useLanguage } from "../context/LanguageContext";

function LaMaison() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#fefbf4] pt-[92px]">
      {/* 1. Hero Section: Savoir-Faire */}
      <div className="mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="garamond text-[44px] font-semibold uppercase tracking-[0.1em] text-[#2e2c2a] sm:text-[64px] lg:text-[120px]">
          {t("savoirFaireTitle")}
        </h1>
        <p className="garamond mx-auto mt-6 max-w-[700px] text-[16px] leading-relaxed text-[#5c5752] sm:text-[18px]">
          {t("savoirFaireDesc")}
        </p>
      </div>

      {/* 2. Section: The Choice of Excellence */}
      <div className="container border-t border-[#e5dfd5] py-16">
        <div className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="overflow-hidden bg-[#faf6ec]">
            <img
              src="/assets/img/LADUREE_24-10-2024_pmonetta-7107_1.webp"
              alt="The Choice of Excellence"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="garamond text-center lg:text-left">
            <h2 className="text-[32px] uppercase tracking-wide text-[#2e2c2a] sm:text-[42px]">
              {t("choiceOfExcellenceTitle")}
            </h2>
            <div className="laduree-dotted-v my-6 hidden h-[50px] w-4 lg:block" />
            <p className="text-[15px] leading-relaxed text-[#5c5752] space-y-4">
              {t("choiceOfExcellenceDesc1")}
              <br />
              <br />
              {t("choiceOfExcellenceDesc2")}
              <br />
              <br />
              {t("choiceOfExcellenceDesc3")}
            </p>
          </div>
        </div>
      </div>

      {/* 3. Banner / Video Break with Since 1862 */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-black/20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://laduree.com/cdn/shop/videos/c/vp/52f05b95eaf6476b80f9e15eb35e2907/52f05b95eaf6476b80f9e15eb35e2907.HD-1080p-4.8Mbps-43751471.mp4?v=0"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="garamond text-[50px] font-normal uppercase tracking-[0.2em] text-white sm:text-[70px]">
            {t("since1862")}
          </h2>
        </div>
      </div>

      {/* 4. Section: The Art of Transmission */}
      <div className="container border-t border-[#e5dfd5] py-16">
        <div className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="garamond order-2 text-center lg:order-1 lg:text-left">
            <h2 className="text-[32px] uppercase tracking-wide text-[#2e2c2a] sm:text-[42px]">
              {t("artOfTransmissionTitle")}
            </h2>
            <div className="laduree-dotted-v my-6 hidden h-[50px] w-4 lg:block" />
            <p className="text-[15px] leading-relaxed text-[#5c5752] space-y-4">
              {t("artOfTransmissionDesc1")}
              <br />
              <br />
              {t("artOfTransmissionDesc2")}
            </p>
          </div>
          <div className="order-1 overflow-hidden bg-[#faf6ec] lg:order-2">
            <img
              src="/assets/img/2023-01-17-Ladure_ue-ConventionDesChefs-ChampsElyse_ue_75_-HadrienFavreauPhotography-86.webp"
              alt="The Art of Transmission"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 5. Section: Sensorial Exploration */}
      <div className="container border-t border-[#e5dfd5] py-16">
        <div className="mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="overflow-hidden bg-[#faf6ec]">
            <img
              src="/assets/img/2025-06-18-SelectionretoucheeHD-Laduree-Laconventiondeschefs2025-Hadrien_Favreau_Photographie-11.webp"
              alt="Sensorial Exploration"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="garamond text-center lg:text-left">
            <h2 className="text-[32px] uppercase tracking-wide text-[#2e2c2a] sm:text-[42px]">
              {t("sensorialExplorationTitle")}
            </h2>
            <div className="laduree-dotted-v my-6 hidden h-[50px] w-4 lg:block" />
            <p className="text-[15px] leading-relaxed text-[#5c5752] mb-4">
              {t("sensorialExplorationIntro")}
            </p>
            <ul className="text-[15px] leading-relaxed text-[#5c5752] space-y-2 text-left inline-block lg:block">
              <li>{t("sensorialList1")}</li>
              <li>{t("sensorialList2")}</li>
              <li>{t("sensorialList3")}</li>
              <li>{t("sensorialList4")}</li>
              <li>{t("sensorialList5")}</li>
            </ul>
            <p className="text-[15px] leading-relaxed text-[#5c5752] mt-4">
              {t("sensorialExplorationEnd")}
            </p>
          </div>
        </div>
      </div>

      {/* 6. Bottom Quote Section */}
      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] py-20 px-6 text-center">
        <div className="mx-auto max-w-[900px] garamond">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66] mb-4">
            {t("senseOfDetailSubtitle")}
          </p>
          <h2 className="text-[28px] md:text-[40px] text-[#2e2c2a] leading-relaxed font-normal ">
            {t("artOfVivreQuote")}
          </h2>
        </div>
      </div>

      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          {t("home")}
        </Link>
        <span className="mx-2">•</span>
        <span>{t("laMaisonBreadcrumb")}</span>
      </div>
    </div>
  );
}

export default LaMaison;