import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function SupplierOffer() {
  const { t } = useLanguage();

  const items = [
    { id: 1, title: t("chocolatesTitle"), desc: t("chocolatesDesc"), image: "/assets/img/LADUREE_WEB_06-23_pmonetta-0726_8.webp" },
    { id: 2, title: t("jamsHoneysTitle"), desc: t("jamsHoneysDesc"), image: "/assets/img/LADUREE_WEB_06-23_pmonetta-0641.webp" },
    { id: 3, title: t("teasTitle"), desc: t("teasDesc"), image: "/assets/img/LADUREE_WEB_06-23_pmonetta-8640_4.webp" },
    { id: 4, title: t("eugenieBoxesTitle"), desc: t("supplierEugenieDesc"), image: "/assets/img/63dd074fd01a4_BLOC_EUGENIE_CHOCOLAT.webp" },
  ];

  return (
    <BasePageTemplate
      title={t("supplierOfferTitle")}
      mainImage="/assets/img/LADUREE_WEB_06-23_pmonetta-0726_8.webp"
      description={t("supplierOfferDesc")}
      sectionTitle={t("fineFoodSuggestions")}
      sectionDesc={t("fineFoodSuggestionsDesc")}
      items={items}
    />
  );
}

export default SupplierOffer;