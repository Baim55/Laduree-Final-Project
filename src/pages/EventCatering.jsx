import BasePageTemplate from "../components/BasePageTemplate";
import { useLanguage } from "../context/LanguageContext";

function EventCatering() {
  const { t } = useLanguage();

  const eventVenues = [
    {
      id: 1,
      title: t("champsElyséesTitle"),
      desc: t("champsElyséesDesc"),
      image: "/assets/img/LADUREE_20-02-25_pmonetta-5880.webp",
      link: "/contact",
    },
    {
      id: 2,
      title: t("royaleTitle"),
      desc: t("royaleDesc"),
      image: "/assets/img/b7962be15b318ce83d0bbedcf7b5e6010a846c33_visuel_royale_renovation_n4.webp",
      link: "/contact",
    },
    {
      id: 3,
      title: t("bonaparteTitle"),
      desc: t("bonaparteDesc"),
      image: "/assets/img/121_Laduree_Bonaparte_140323_9034_HD_RomeoBalancourt_2.webp",
      link: "/contact",
    },
  ];

  return (
    <BasePageTemplate
      title={t("eventsMainTitle")}
      mainImage="/assets/img/LADUREE_20-02-25_pmonetta-5858.webp"
      description={t("eventsMainDesc")}
      sectionTitle={t("ourAreasTitle")}
      sectionDesc={t("ourAreasDesc")}
      items={eventVenues}
    />
  );
}

export default EventCatering;