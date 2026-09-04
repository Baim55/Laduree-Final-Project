import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function CorporateGifts() {
  const { t } = useLanguage();

  const items = [
    { id: 1, title: t("macaronsBoxesTitle"), desc: t("macaronsBoxesDesc"), image: "/assets/img/macarons.avif" },
    { id: 2, title: t("eugenieBoxesTitle"), desc: t("eugenieBoxesDesc"), image: "/assets/img/eugenie.avif" },
    { id: 3, title: t("gourmetHampersTitle"), desc: t("gourmetHampersDesc"), image: "/assets/img/casablanca.avif" },
    { id: 4, title: t("delicatessenOfferTitle"), desc: t("delicatessenOfferDesc"), image: "/assets/img/chocolates.avif" },
  ];

  return (
    <BasePageTemplate
      title={t("corpGiftsMainTitle")}
      mainImage="/assets/img/LADUREE_WEB_06-23_pmonetta-0270.webp"
      description={t("corpGiftsDesc")}
      items={items}
    />
  );
}

export default CorporateGifts;