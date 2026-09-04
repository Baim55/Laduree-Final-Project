import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function MarshmallowBearsPage() {
  const { t } = useLanguage();

  const items = [
    {
      id: 1,
      title: t("darkChocolateBearTitle"),
      desc: t("darkChocolateBearDesc"),
      image: "/assets/img/products/LADUREE_24-10-2024_pmonetta-7602_copie.webp",
      showButton: false,
    },
    {
      id: 2,
      title: t("milkChocolateBearTitle"),
      desc: t("milkChocolateBearDesc"),
      image: "/assets/img/products/LADUREE_24-10-2024_pmonetta-7618_copie.webp",
      showButton: false,
    }
  ];

  return (
    <BasePageTemplate
      title={t("marshmallowBearsTitle")}
      mainImage="/assets/img/products/LADUREE_24-10-2024_pmonetta-7626_copie.webp"
      description={t("marshmallowBearsDesc")}
      sectionTitle={t("darkAndIntenseTitle")}
      sectionDesc={t("darkAndIntenseDesc")}
      items={items}
    />
  );
}

export default MarshmallowBearsPage;