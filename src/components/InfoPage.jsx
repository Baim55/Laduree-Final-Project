import { useParams, Link } from "react-router";
import { getMenuData } from "../data/menuData";
import { useLanguage } from "../context/LanguageContext";

function findInfoContent(slug, t) {
  const menuData = getMenuData(t);
  for (const tab of Object.values(menuData)) {
    for (const section of tab) {
      const match = section.links?.find((l) => l.slug === slug);
      if (match) {
        return { label: match.label, image: section.image };
      }
    }
  }
  return null;
}

function InfoPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const content = findInfoContent(slug, t);

  if (!content) {
    return (
      <p className="pt-[150px] text-center garamond text-[18px]">
        {t("pageNotFound")}
      </p>
    );
  }

  return (
    <div className="garamond pt-[150px] text-center px-4">
      <h1 className="mb-6 text-[48px] uppercase">{content.label}</h1>
      <p className="mx-auto mb-10 max-w-[600px] text-[16px] text-[#46413de3]">
        Discover more about {content.label.replace(/"/g, "")} — a celebration of
        craftsmanship and flavor from the Maison.
      </p>
      <Link
        to="/shop"
        className="inline-block border border-black px-8 py-3 text-[16px] uppercase tracking-wider hover:bg-black hover:text-white transition"
      >
        {t("exploreProducts")}
      </Link>

      <div className="mt-16 px-4">
        <img
          src={content.image}
          alt={content.label}
          className="mx-auto w-full max-w-[800px] object-cover shadow-sm"
        />
      </div>
    </div>
  );
}

export default InfoPage;
