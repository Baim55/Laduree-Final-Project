import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function ChocolatePearlsPage() {
  const { t } = useLanguage();

  const items = [
    {
      id: 1,
      title: t("hazelnutVanillaTitle"),
      desc: t("hazelnutVanillaDesc"),
      image: "/assets/img/products/LADUREE_19-01-24_pmonetta-6529.webp",
      showButton: false,
    },
    {
      id: 2,
      title: t("peanutCaramelTitle"),
      desc: t("peanutCaramelDesc"),
      image: "/assets/img/products/LADUREE_19-01-24_pmonetta-6510.webp",
      showButton: false,
    },
    {
      id: 3,
      title: t("ispahanAlmondTitle"),
      desc: t("ispahanAlmondDesc"),
      image: "/assets/img/products/LADUREE_19-01-24_pmonetta-6598.webp",
      showButton: false,
    },
    {
      id: 4,
      title: t("pistachioOrangeBlossomTitle"),
      desc: t("pistachioOrangeBlossomDesc"),
      image: "/assets/img/products/LADUREE_19-01-24_pmonetta-6568.webp",
      showButton: false,
    },
  ];

  return (
    <>
      <BasePageTemplate
        title={t("chocolatePearlsTitle")}
        mainImage="/assets/img/products/LADUREE_24-10-2024_pmonetta-7819.webp"
        description={t("chocolatePearlsDesc")}
        sectionTitle={t("discoverRecipesTitle")}
        sectionDesc={t("discoverRecipesDesc")}
        items={items}
      />
      <div className="garamond border-t border-[#e5dfd5] bg-[#fefbf4] py-20 px-6 text-center">
        <div className="mx-auto max-w-[800px]">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66] mb-4">
            {t("legacyOfExcellence")}
          </p>
          <h2 className="text-[32px] md:text-[44px] text-[#2e2c2a] leading-snug font-normal">
            {t("legacyOfExcellenceDesc")}
          </h2>
        </div>
      </div>
    </>
  );
}

export default ChocolatePearlsPage;