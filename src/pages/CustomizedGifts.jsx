import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function CustomizedGifts() {
  const { t } = useLanguage();

  const customItems = [
    {
      id: 1,
      title: t("personalizedMacaronsTitle"),
      desc: t("personalizedMacaronsDesc"),
      image: "/assets/img/POIRAY_LADUREE_COLLABORATION.webp",
    },
    {
      id: 2,
      title: t("customizedBoxesTitle"),
      desc: t("customizedBoxesDesc"),
      image: "/assets/img/CUSTOM_BRANDED_BOXES_LADUREE.webp",
    },
    {
      id: 3,
      title: t("personalizedFlavorTitle"),
      desc: t("personalizedFlavorDesc"),
      image: "/assets/img/LADUREE_WEB_06-23_pmonetta-0429_11.webp",
    },
  ];

  return (
    <BasePageTemplate
      title={t("customizedGiftsMainTitle")}
      mainImage="/assets/img/LADUREE_15-03-24_pmonetta-7326_1.webp"
      description={t("customizedGiftsDesc")}
      sectionTitle={t("customizationSuggestionsTitle")}
      sectionDesc={t("customizationSuggestionsDesc")}
      items={customItems}
    />
  );
}

export default CustomizedGifts;
